import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { profileCardDataMock, profileDataMock } from "@entities/Profile"
import { userDataMock } from "@entities/User"
import { type Meta, type StoryObj } from "@storybook/react"
import type { ComponentProps } from "react"
import type { editableProfileStateMap } from "../../store/storeTypes/editableProfileState.map"
import { EditableProfileCard } from "./EditableProfileCard"

type EditableProfileCardCustomProps = ComponentProps<typeof EditableProfileCard> & {
	login: boolean
}

const editableProfileCardState: editableProfileStateMap = {
	formData: profileCardDataMock,
	data: profileDataMock,
	readOnly: true,
	isLoading: false,
	errors: undefined
}

const state = {
	user: { authData: userDataMock({}) },
	editableProfileCard: editableProfileCardState
}

const meta: Meta<EditableProfileCardCustomProps> = {
	title: "features/EditableProfileCard",
	component: EditableProfileCard,
	parameters: {
		controls: {
			exclude: ["id"]
		},
		mockData: [
			{
				url: `${__BASE_URL__}/profile/:id`,
				method: "PUT",
				status: 200,
				delay: 2000,
				response: profileDataMock
			},
			{
				url: `${__BASE_URL__}/profile/:id`,
				method: "GET",
				status: 200,
				delay: 2000,
				response: profileDataMock
			}
		]
	},
	decorators: [CenterDecorator, StoreDecorator(state)]
}

export default meta

type TypeStory = StoryObj<EditableProfileCardCustomProps>

export const Default: TypeStory = {
	render: ({ login }) => {
		return <EditableProfileCard id={login ? "1" : "2"} />
	},
	args: {
		login: true
	}
}

export const ErrorServer: TypeStory = {
	render: ({ login }) => {
		return <EditableProfileCard id={login ? "1" : "2"} />
	},
	args: { login: true },
	parameters: {
		mockData: [
			{
				url: `${__BASE_URL__}/profile/:id`,
				method: "GET",
				status: 403,
				delay: 2000,
				response: profileDataMock
			}
		]
	}
}
