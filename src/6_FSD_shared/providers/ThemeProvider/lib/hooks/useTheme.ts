import { LOCAL_STORAGE_THEME_KEY } from "@constants/localStorage.constant"
import { useCallback, useContext, useEffect } from "react"
import { THEMES } from "../../constants/Themes.constant"
import { ThemesProviderContext } from "../../context/ThemesProviderContext"

type useThemeType = { theme: THEMES; switchTheme: () => void }

export function useTheme(): useThemeType {
	const { theme, setTheme, saveTheme } = useContext(ThemesProviderContext)

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

		saveTheme?.(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}, [saveTheme, setTheme, theme])

	useEffect(() => {
		document.body.className = theme || THEMES.GREEN
	}, [theme])

	return { theme: theme || THEMES.GREEN, switchTheme }
}
