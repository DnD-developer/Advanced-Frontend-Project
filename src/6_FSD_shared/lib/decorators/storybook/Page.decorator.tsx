import { type Decorator } from "@storybook/react"
import { Page } from "@widgets/Page"

export const PageDecorator: Decorator = Story => (
	<Page className="full-height">
		<Story />
	</Page>
)
