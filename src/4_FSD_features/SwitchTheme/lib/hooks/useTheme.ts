import { LOCAL_STORAGE_THEME_KEY } from "@constants/localStorage.constant"
import { THEMES } from "@providers/ThemeProvider"
import { ThemeProviderContext } from "@providers/ThemeProvider/context/ThemeProvider.context"
import { useCallback, useContext, useEffect } from "react"

type useThemeType = { theme: THEMES; switchTheme: () => void }

export function useTheme(): useThemeType {
	const { theme, setTheme } = useContext(ThemeProviderContext)

	const switchTheme = useCallback(() => {
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
	}, [setTheme, theme])

	useEffect(() => {
		document.body.className = theme || THEMES.GREEN
	}, [theme])

	return { theme: theme || THEMES.GREEN, switchTheme }
}
