import { ThemesProvider } from "@providers/ThemeContext"
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

		const selected = themeOverride || selectedTheme || defaultTheme

		return (
			<ThemesProvider>
				<div className={`app ${selected}`}>
					<StoryFn />
				</div>
			</ThemesProvider>
		)
	}
}
