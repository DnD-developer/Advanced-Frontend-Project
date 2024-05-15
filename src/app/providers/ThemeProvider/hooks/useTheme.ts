import { LOCAL_STORAGE_THEME_KEY } from "@constants/localStorage.constant"
import { useContext } from "react"
import { ThemeProviderContext, THEMES } from "../context/ThemeProvider.context"

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
