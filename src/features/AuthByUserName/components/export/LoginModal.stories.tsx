import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.Decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { loginFormReducer } from "../../store/slices/loginForm.slice"
import { LoginModal } from "./LoginModal"

const meta: Meta<typeof LoginModal> = {
	title: "features/LoginModal",
	component: LoginModal,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof LoginModal>

export const Default: TypeStory = {
	args: {
		isOpen: true
	},
	decorators: [StoreDecorator({}, { loginForm: loginFormReducer })]
}

export const Loading: TypeStory = {
	args: {
		isOpen: true
	},
	decorators: [
		StoreDecorator(
			{
				loginForm: { isLoading: true, data: { userName: "admin", password: "123" } }
			},
			{ loginForm: loginFormReducer }
		)
	]
}

export const ErrorNoUser: TypeStory = {
	args: {
		isOpen: true
	},
	decorators: [
		StoreDecorator(
			{
				loginForm: { error: { noUser: true }, data: { userName: "adm", password: "123" } }
			},
			{ loginForm: loginFormReducer }
		)
	]
}

export const ErrorOtherError: TypeStory = {
	args: {
		isOpen: true
	},
	decorators: [
		StoreDecorator(
			{
				loginForm: {
					error: { otherError: "other error" },
					data: { userName: "admin", password: "123" }
				}
			},
			{ loginForm: loginFormReducer }
		)
	]
}
