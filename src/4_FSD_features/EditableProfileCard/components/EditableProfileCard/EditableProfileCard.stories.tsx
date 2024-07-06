import { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { Country } from "@entities/Country"
import { Currency } from "@entities/Currency"
import { ServerErrors, ValidateErrors } from "@entities/Profile"
import { type Meta, type StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { editableProfileStateMap } from "../../store/storeTypes/editableProfileState.map"
import { EditableProfileCard } from "./EditableProfileCard"

type EditableProfileCardCustomProps = ComponentProps<typeof EditableProfileCard> & {
	login: boolean
}

const meta: Meta<EditableProfileCardCustomProps> = {
	title: "features/EditableProfileCard",
	component: EditableProfileCard,
	parameters: {
		controls: {
			exclude: ["id"]
		}
	},
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
	data: { id: "1", ...dataTest },
	readOnly: true
}

const state = {
	user: { authData: { id: "1" } },
	editableProfileCard: editableProfileCardState
}

type TypeStory = StoryObj<EditableProfileCardCustomProps>

export const Default: TypeStory = {
	render: ({ login }) => {
		return <EditableProfileCard id={login ? "1" : "2"} />
	},
	args: {
		login: true
	},
	decorators: [StoreDecorator(state)]
}

export const Loading: TypeStory = {
	render: ({ login }) => {
		return <EditableProfileCard id={login ? "1" : "2"} />
	},
	args: { login: true },
	decorators: [
		StoreDecorator({
			...state,
			editableProfileCard: {
				...editableProfileCardState,
				isLoading: true
			}
		})
	]
}

export const ErrorServer: TypeStory = {
	render: ({ login }) => {
		return <EditableProfileCard id={login ? "1" : "2"} />
	},
	args: { login: true },
	decorators: [
		StoreDecorator({
			...state,
			editableProfileCard: {
				...editableProfileCardState,
				errors: [ServerErrors.SERVER_NOT_FOUND]
			}
		})
	]
}
export const ErrorValidate: TypeStory = {
	args: {
		id: "1"
	},
	decorators: [
		StoreDecorator({
			...state,
			editableProfileCard: {
				data: {
					id: "1",
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
		})
	]
}
