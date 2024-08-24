import { DeepPartial } from "@customTypes/global.types"
import { fetchProfileDataThunk, ServerErrors, ValidateErrorsConstant } from "@entities/Profile"
import { describe, expect, test } from "@jest/globals"
import { editableProfileStateMap } from "../storeTypes/editableProfileState.map"
import { postProfileDataThunk } from "../thunks/postProfileData/postProfileData.thunk"
import { editableProfileActions, editableProfileCardReducer } from "./editableProfileCard.slice"

describe("editableProfileCard staticReducer", () => {
	test("action set ReadOnly", () => {
		const state: DeepPartial<editableProfileStateMap> = {
			readOnly: true
		}

		const resultState = editableProfileCardReducer(
			state as editableProfileStateMap,
			editableProfileActions.setReadOnly(false)
		)

		expect(resultState).toEqual({
			readOnly: false
		})
	})

	test("action resetForm", () => {
		const state: DeepPartial<editableProfileStateMap> = {
			readOnly: false,
			errors: [ValidateErrorsConstant.USERNAME_ERROR],
			formData: {
				userName: "123"
			},
			data: {
				userName: "Lucifer"
			}
		}

		const resultState = editableProfileCardReducer(
			state as editableProfileStateMap,
			editableProfileActions.resetForm()
		)

		expect(resultState).toEqual({
			readOnly: true,
			errors: undefined,
			formData: {
				userName: "Lucifer"
			},
			data: {
				userName: "Lucifer"
			}
		})
	})

	test("action updateForm", () => {
		const state: DeepPartial<editableProfileStateMap> = {
			formData: {
				userName: "Lucifer",
				lastName: "testLast"
			}
		}

		const resultState = editableProfileCardReducer(
			state as editableProfileStateMap,
			editableProfileActions.updateForm({ userName: "123" })
		)

		expect(resultState).toEqual({
			formData: {
				userName: "123",
				lastName: "testLast"
			}
		})
	})
})

describe("editableProfileCard extraReducer fetchProfileDataThunk", () => {
	test("action fetchProfileDataThunk pending", () => {
		const state: DeepPartial<editableProfileStateMap> = {
			isLoading: false,
			errors: [ServerErrors.SERVER_NOT_FOUND]
		}

		const resultState = editableProfileCardReducer(
			state as editableProfileStateMap,
			fetchProfileDataThunk.pending("", "1")
		)

		expect(resultState).toEqual({
			isLoading: true,
			error: undefined
		})
	})

	test("action fetchProfileDataThunk fulfilled", () => {
		const state: DeepPartial<editableProfileStateMap> = {
			isLoading: true,
			errors: [ServerErrors.SERVER_NOT_FOUND],
			data: {
				id: "1",
				userName: "123"
			},
			formData: {
				userName: "123"
			}
		}

		const resultState = editableProfileCardReducer(
			state as editableProfileStateMap,
			fetchProfileDataThunk.fulfilled({ id: "1", userName: "Lucifer" }, "", "1")
		)

		expect(resultState).toEqual({
			isLoading: false,
			errors: undefined,
			data: {
				id: "1",
				userName: "Lucifer"
			},
			formData: {
				userName: "Lucifer"
			}
		})
	})

	test("action fetchProfileDataThunk rejected", () => {
		const state: DeepPartial<editableProfileStateMap> = {
			isLoading: true,
			errors: undefined
		}

		const resultState = editableProfileCardReducer(
			state as editableProfileStateMap,
			fetchProfileDataThunk.rejected(null, "", "1", [ServerErrors.SERVER_NOT_FOUND])
		)

		expect(resultState).toEqual({
			isLoading: false,
			errors: [ServerErrors.SERVER_NOT_FOUND]
		})
	})
})

describe("editableProfileCard extraReducer postProfileDataThunk", () => {
	test("action postProfileDataThunk pending", () => {
		const state: DeepPartial<editableProfileStateMap> = {
			isLoading: false,
			errors: [ServerErrors.SERVER_NOT_FOUND],
			readOnly: false
		}

		const resultState = editableProfileCardReducer(
			state as editableProfileStateMap,
			postProfileDataThunk.pending("", "1")
		)

		expect(resultState).toEqual({
			isLoading: true,
			error: undefined,
			readOnly: true
		})
	})

	test("action postProfileDataThunk fulfilled", () => {
		const state: DeepPartial<editableProfileStateMap> = {
			isLoading: true,
			errors: [ServerErrors.SERVER_NOT_FOUND],
			readOnly: false,
			data: {
				id: "1",
				userName: "Lucifer"
			},
			formData: {
				userName: "Lucifer"
			}
		}

		const resultState = editableProfileCardReducer(
			state as editableProfileStateMap,
			postProfileDataThunk.fulfilled({ id: "1", userName: "Lucifer" }, "", "1")
		)

		expect(resultState).toEqual({
			isLoading: false,
			errors: undefined,
			readOnly: true,
			data: {
				id: "1",
				userName: "Lucifer"
			},
			formData: {
				userName: "Lucifer"
			}
		})
	})

	test("action postProfileDataThunk rejected ServerErrors", () => {
		const state: DeepPartial<editableProfileStateMap> = {
			isLoading: true,
			errors: undefined,
			readOnly: false
		}

		const resultState = editableProfileCardReducer(
			state as editableProfileStateMap,
			postProfileDataThunk.rejected(null, "", "1", [ServerErrors.SERVER_NOT_FOUND])
		)

		expect(resultState).toEqual({
			isLoading: false,
			errors: [ServerErrors.SERVER_NOT_FOUND],
			readOnly: true
		})
	})

	test("action postProfileDataThunk rejected ValidateErrorsConstant", () => {
		const state: DeepPartial<editableProfileStateMap> = {
			isLoading: true,
			errors: undefined,
			readOnly: false
		}

		const resultState = editableProfileCardReducer(
			state as editableProfileStateMap,
			postProfileDataThunk.rejected(null, "", "1", [ValidateErrorsConstant.FIRST_NAME])
		)

		expect(resultState).toEqual({
			isLoading: false,
			errors: [ValidateErrorsConstant.FIRST_NAME],
			readOnly: false
		})
	})
})
