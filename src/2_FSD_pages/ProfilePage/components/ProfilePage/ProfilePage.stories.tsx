import { DeepPartial } from "@customTypes/global.types"
import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { Country } from "@entities/Country"
import { Currency } from "@entities/Currency"
import { editableProfileStateMap } from "@features/EditableProfileCard"
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
		}
	},
	decorators: [PageDecorator, StoreDecorator({ editableProfileCard: {} })]
}

export default meta

type TypeStory = StoryObj<ProfilePageCustomProps>

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

export const Default: TypeStory = {
	render: ({ login }) => {
		return <ProfilePage idTest={login ? "1" : "2"} />
	},
	args: { login: true },
	decorators: [
		StoreDecorator({
			user: { authData: { id: "1" } },
			editableProfileCard: editableProfileCardState
		})
	]
}
