import { type Decorator } from "@storybook/react"
import { Page } from "@ui/Page"

export const PageDecorator: Decorator = Story => (
	<Page className="full-height">
		<Story />
	</Page>
)
