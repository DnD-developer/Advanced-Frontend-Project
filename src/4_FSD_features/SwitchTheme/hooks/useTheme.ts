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
		const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
		setTheme?.(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return { theme: theme || THEMES.DARK, switchTheme }
}
