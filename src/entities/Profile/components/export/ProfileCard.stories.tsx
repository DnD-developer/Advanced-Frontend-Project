import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.Decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { profileReducer } from "../../store/slices/profile.slice"
import { ProfileCard } from "./ProfileCard"

const meta: Meta<typeof ProfileCard> = {
	title: "entities/ProfileCard",
	component: ProfileCard,
	decorators: [CenterDecorator, StoreDecorator({ profile: {} }, { profile: profileReducer })]
}

export default meta

type TypeStory = StoryObj<typeof ProfileCard>

export const Default: TypeStory = {
	args: {}
}
