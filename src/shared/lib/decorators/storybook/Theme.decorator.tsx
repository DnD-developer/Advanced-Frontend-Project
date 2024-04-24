import { type ClassNameStrategyConfiguration, DecoratorHelpers } from "@storybook/addon-themes"
import { type Decorator } from "@storybook/react"

const { useThemeParameters, initializeThemeState, pluckThemeFromContext } = DecoratorHelpers

export const ThemeDecorator = ({
	themes,
	defaultTheme,
	...rest
}: ClassNameStrategyConfiguration): Decorator => {
	initializeThemeState(Object.keys(themes), defaultTheme)

	return (StoryFn, context) => {
		const selectedTheme = pluckThemeFromContext(context)

		const { themeOverride } = useThemeParameters()

		const selected = themeOverride || selectedTheme || defaultTheme

		return (
			<div className={`app ${selected}`}>
				<StoryFn />
			</div>
		)
	}
}
