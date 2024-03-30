import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, THEMES } from "../ThemeContext"

type useThemeType = { theme: THEMES; switchTheme: () => void }
export function useTheme(): useThemeType {
	const { theme, setTheme } = useContext(ThemeContext)

	const switchTheme = (): void => {
		const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return { theme, switchTheme }
}
