import { LOCAL_STORAGE_THEME_KEY } from "@constants/localStorage.constant"
import { memo, type PropsWithChildren, useMemo, useState, useEffect } from "react"
import { THEMES } from "../constants/Themes.constant"
import type { ThemesProviderContextType } from "../context/ThemesProviderContext"
import { ThemesProviderContext } from "../context/ThemesProviderContext"

const defaultTheme: THEMES = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEMES

type ThemesProviderProps = {
	saveTheme?: ThemesProviderContextType["saveTheme"]
	userTheme?: ThemesProviderContextType["theme"]
} & PropsWithChildren

export const ThemesProvider = memo<ThemesProviderProps>(({ children, saveTheme, userTheme }) => {
	const [theme, setTheme] = useState<THEMES>(userTheme || defaultTheme || THEMES.DARK)

	useEffect(() => {
		if (userTheme) {
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, userTheme)
			setTheme(userTheme)
		}
	}, [userTheme])

	const themeOption: ThemesProviderContextType = useMemo(
		() => ({ theme, setTheme, saveTheme }),
		[saveTheme, theme]
	)

	return (
		<ThemesProviderContext.Provider value={themeOption}>
			{children}
		</ThemesProviderContext.Provider>
	)
})
