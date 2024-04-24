import { RouterDecorator } from "@decorators/storybook/Router.decorator"
import { StyleDecorator } from "@lib/decorators/storybook/Style.decorator"
import { ThemeDecorator } from "@lib/decorators/storybook/Theme.decorator"
import { THEMES } from "@providers/ThemeContext/ThemeContext"
import type { Preview } from "@storybook/react"
import i18n from "./i18nextStorybook"

const preview: Preview = {
	globals: {
		locale: "en",
		locales: {
			en: "en",
			ru: "ru"
		}
	},
	parameters: {
		layout: "fullscreen",
		i18n,
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	decorators: [
		StyleDecorator,
		ThemeDecorator({
			themes: {
				[THEMES.DARK]: `app ${THEMES.DARK}`,
				[THEMES.LIGHT]: `app ${THEMES.LIGHT}`
			},
			defaultTheme: THEMES.DARK
		}),
		RouterDecorator
	]
}

export default preview
