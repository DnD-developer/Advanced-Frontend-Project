import { type Decorator } from "@storybook/react"
import { Page } from "src/3_FSD_widgets/Page"

export const PageDecorator: Decorator = Story => (
	<Page className="full-height">
		<Story />
	</Page>
)
