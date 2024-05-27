import { LOCAL_STORAGE_THEME_KEY } from "@constants/localStorage.constant"
import {
	ThemeProviderContext,
	THEMES
} from "@providers/ThemeProvider/context/ThemeProvider.context"
import { useContext } from "react"

type useThemeType = { theme: THEMES; switchTheme: () => void }

export function useTheme(): useThemeType {
	const { theme, setTheme } = useContext(ThemeProviderContext)

	const switchTheme = (): void => {
		let newTheme

		switch (theme) {
			case THEMES.DARK:
				newTheme = THEMES.LIGHT
				break
			case THEMES.LIGHT:
				newTheme = THEMES.GREEN
				break
			case THEMES.GREEN:
				newTheme = THEMES.DARK
				break
			default:
				newTheme = THEMES.GREEN
		}
		setTheme?.(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return { theme: theme || THEMES.GREEN, switchTheme }
}
