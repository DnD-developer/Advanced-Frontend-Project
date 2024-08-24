import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { profileDataMock } from "@entities/Profile"
import { userDataMock } from "@entities/User"
import { type Meta, type StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { ProfilePage } from "./ProfileAsync.page"

type ProfilePageCustomProps = ComponentProps<typeof ProfilePage> & { login: boolean }

const meta: Meta<ProfilePageCustomProps> = {
	title: "pages/ProfilePage",
	component: ProfilePage,
	parameters: {
		controls: {
			exclude: ["idTest"]
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
	decorators: [PageDecorator, StoreDecorator({ editableProfileCard: {} })]
}

export default meta

type TypeStory = StoryObj<ProfilePageCustomProps>

export const Default: TypeStory = {
	render: ({ login }) => {
		return <ProfilePage idTest={login ? "1" : "2"} />
	},
	args: { login: true },
	decorators: [
		StoreDecorator({
			user: { authData: userDataMock }
		})
	]
}
