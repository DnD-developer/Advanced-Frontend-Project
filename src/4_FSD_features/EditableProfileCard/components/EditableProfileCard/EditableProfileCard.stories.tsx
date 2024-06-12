import { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { Country } from "@entities/Country"
import { Currency } from "@entities/Currency"
import { ServerErrors, ValidateErrors } from "@entities/Profile"
import { type Meta, type StoryObj } from "@storybook/react"
import { editableProfileCardReducer } from "../../store/slices/editableProfileCard.slice"
import { editableProfileStateMap } from "../../store/storeTypes/editableProfileState.map"
import { EditableProfileCard } from "./EditableProfileCard"

const meta: Meta<typeof EditableProfileCard> = {
	title: "features/EditableProfileCard",
	component: EditableProfileCard,
	decorators: [CenterDecorator]
}

export default meta

const dataTest = {
	avatar: "https://i.pinimg.com/originals/0d/cb/1f/0dcb1f45db2d5a624e5da74b74f3ddb9.png",
	firstName: "Lucifer",
	lastName: "Morningstar",
	age: 25,
	currency: Currency.EUR,
	country: Country.Belarus,
	city: "Fryazino",
	userName: "Lucifer"
}

const editableProfileCardState: DeepPartial<editableProfileStateMap> = {
	formData: dataTest,
	data: dataTest,
	readOnly: true
}

const asyncReducer = { editableProfileCard: editableProfileCardReducer }

type TypeStory = StoryObj<typeof EditableProfileCard>

export const Default: TypeStory = {
	args: {},
	decorators: [StoreDecorator({ editableProfileCard: editableProfileCardState }, asyncReducer)]
}
export const Loading: TypeStory = {
	args: {},
	decorators: [
		StoreDecorator(
			{
				editableProfileCard: {
					...editableProfileCardState,
					isLoading: true
				}
			},
			asyncReducer
		)
	]
}

export const ErrorServer: TypeStory = {
	args: {},
	decorators: [
		StoreDecorator(
			{
				editableProfileCard: {
					...editableProfileCardState,
					errors: [ServerErrors.SERVER_NOT_FOUND]
				}
			},
			asyncReducer
		)
	]
}
export const ErrorValidate: TypeStory = {
	args: {},
	decorators: [
		StoreDecorator(
			{
				editableProfileCard: {
					data: {
						avatar: "",
						age: undefined,
						userName: "",
						firstName: "",
						lastName: "",
						city: ""
					},
					formData: {
						avatar: "",
						age: undefined,
						userName: "",
						firstName: "",
						lastName: "",
						city: ""
					},
					readOnly: false,
					errors: [...Object.values(ValidateErrors)]
				}
			},
			asyncReducer
		)
	]
}
