import { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { ServerErrors, ValidateErrors } from "@entities/Profile"
import { type Meta, type StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { dataTestProfileCard } from "../../mocks/DataProfileCard.mock"
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

const editableProfileCardState: DeepPartial<editableProfileStateMap> = {
	formData: dataTestProfileCard,
	data: dataTestProfileCard,
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
