import { PageDecorator } from "@decorators/storybook/Page.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { Country } from "@entities/Country"
import { Currency } from "@entities/Currency"
import { editableProfileCardReducer, editableProfileStateMap } from "@features/EditableProfileCard"
import { type Meta, type StoryObj } from "@storybook/react"
import { DeepPartial } from "../../../../6_FSD_shared/types/global.types"
import { ProfilePage } from "./ProfileAsync.page"

const meta: Meta<typeof ProfilePage> = {
	title: "pages/ProfilePage",
	component: ProfilePage,
	decorators: [PageDecorator, StoreDecorator({ editableProfileCard: {} })]
}

export default meta

type TypeStory = StoryObj<typeof ProfilePage>

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

export const Default: TypeStory = {
	args: {},
	decorators: [
		StoreDecorator(
			{ editableProfileCard: editableProfileCardState },
			{ editableProfileCard: editableProfileCardReducer }
		)
	]
}
