import { $api } from "@api/instanceAxios.api"
import type { DeepPartial } from "@customTypes/global.types"
import { renderDecorator } from "@decorators/tests/render.decorator"
import { userEventDecorator } from "@decorators/tests/userEvent.decorator"
import { profileDataMock } from "@entities/Profile"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { screen } from "@testing-library/react"
import { editableProfileCardReducer } from "../../store/slices/editableProfileCard.slice"
import { EditableProfileCard } from "./EditableProfileCard"

let state: DeepPartial<mainStateMap> = {}
let profileCard: HTMLElement

describe("editableProfileCardTest", () => {
	beforeEach(async () => {
		state = {
			editableProfileCard: {
				data: profileDataMock,
				readOnly: true,
				errors: undefined,
				formData: profileDataMock,
				isLoading: false
			},
			user: { authData: { id: "1" } }
		}

		jest.spyOn($api, "get").mockReturnValue(
			Promise.resolve({
				data: profileDataMock
			})
		)

		await renderDecorator(<EditableProfileCard id={"1"} />, {
			initialState: state,
			asyncReducers: { editableProfileCard: editableProfileCardReducer }
		})

		profileCard = screen.getByTestId("EditableProfileCard.ProfileCard")
	})
	test("Render", () => {
		const editButton = screen.getByTestId("EditableProfileCard.EditButton")
		const avatar = screen.getByTestId("EditableProfileCard.AvatarCard")
		const userNameInput = screen.getByTestId("EditableProfileCard.UserNameInput.InputElement")

		expect(profileCard).toBeInTheDocument()
		expect(editButton).toBeInTheDocument()
		expect(profileCard).toHaveClass("ProfileCard")
		expect(avatar).toBeInTheDocument()
		expect(userNameInput).toBeInTheDocument()
		expect(userNameInput).toHaveAttribute("readOnly")
	})

	test("changeReadOnly", async () => {
		await userEventDecorator("click", screen.getByTestId("EditableProfileCard.EditButton"))

		const saveButton = screen.getByTestId("EditableProfileCard.SaveButton")
		const cancelButton = screen.getByTestId("EditableProfileCard.CancelButton")
		const avatarInput = screen.getByTestId("EditableProfileCard.AvatarInput.InputElement")
		const userNameInput = screen.getByTestId("EditableProfileCard.UserNameInput.InputElement")

		expect(saveButton).toBeInTheDocument()
		expect(cancelButton).toBeInTheDocument()
		expect(avatarInput).toBeInTheDocument()
		expect(userNameInput).not.toHaveAttribute("readOnly")
		expect(userNameInput).toBeInTheDocument()
		expect(userNameInput).not.toHaveClass("opacityZero")
		expect(userNameInput).not.toHaveAttribute("readOnly")
	})

	test("cancelInputs", async () => {
		await userEventDecorator("click", screen.getByTestId("EditableProfileCard.EditButton"))

		const cancelButton = screen.getByTestId("EditableProfileCard.CancelButton")
		const userNameInput = screen.getByTestId("EditableProfileCard.UserNameInput.InputElement")

		await userEventDecorator("clear", userNameInput)
		await userEventDecorator("type", userNameInput, { text: "1234" })

		expect(userNameInput).toHaveValue("1234")

		await userEventDecorator("click", cancelButton)

		expect(screen.getByTestId("EditableProfileCard.UserNameInput.InputElement")).toHaveValue(
			profileDataMock.userName
		)
	})

	test("saveInputs", async () => {
		await userEventDecorator("click", screen.getByTestId("EditableProfileCard.EditButton"))

		const mockedPut = jest.spyOn($api, "put").mockReturnValue(
			Promise.resolve({
				data: profileDataMock
			})
		)

		const saveButton = screen.getByTestId("EditableProfileCard.SaveButton")
		const userNameInput = screen.getByTestId("EditableProfileCard.UserNameInput.InputElement")

		await userEventDecorator("clear", userNameInput)
		await userEventDecorator("type", userNameInput, { text: "123" })
		await userEventDecorator("click", saveButton)

		expect(mockedPut).toHaveBeenCalled()
		expect(userNameInput).toHaveValue(profileDataMock.userName)
	})

	test("errorSaveInputs", async () => {
		await userEventDecorator("click", screen.getByTestId("EditableProfileCard.EditButton"))

		const mockedPut = jest.spyOn($api, "put").mockReturnValue(
			Promise.resolve({
				data: profileDataMock
			})
		)

		const saveButton = screen.getByTestId("EditableProfileCard.SaveButton")
		const userNameInput = screen.getByTestId("EditableProfileCard.UserNameInput.InputElement")
		const userNameLabel = screen.getByTestId("EditableProfileCard.UserNameInput.LabelElement")

		await userEventDecorator("clear", userNameInput)
		await userEventDecorator("click", saveButton)

		expect(mockedPut).not.toHaveBeenCalled()
		expect(userNameLabel).toHaveTextContent("USERNAME_ERROR")
		expect(userNameInput).toHaveValue("")
	})
})
