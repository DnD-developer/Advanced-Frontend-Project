import { ThemesProvider } from "@sharedProviders/ThemeProvider"
import { type ClassNameStrategyConfiguration, DecoratorHelpers } from "@storybook/addon-themes"
import { type Decorator } from "@storybook/react"

const { useThemeParameters, initializeThemeState, pluckThemeFromContext } = DecoratorHelpers

export const ThemeDecorator = ({
	themes,
	defaultTheme
}: ClassNameStrategyConfiguration): Decorator => {
	initializeThemeState(Object.keys(themes), defaultTheme)

	return function ThemeDecoratorCallBack(StoryFn, context) {
		const selectedTheme = pluckThemeFromContext(context)
		const { themeOverride } = useThemeParameters()

		const selected =
			themes[themeOverride || ""] || themes[selectedTheme] || themes[defaultTheme]

		document.body.className = selected

		return (
			<ThemesProvider>
				<div className={`app`}>
					<StoryFn />
				</div>
			</ThemesProvider>
		)
	}
}
