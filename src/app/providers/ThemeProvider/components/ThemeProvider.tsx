import { LOCAL_STORAGE_THEME_KEY } from "@constants/localStorage.constant"
import { type FC, type PropsWithChildren, useMemo, useState } from "react"
import { ThemeProviderContext, THEMES } from "../context/ThemeProvider.context"

const defaultTheme: THEMES = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEMES

export const ThemesProvider: FC<PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<THEMES>(defaultTheme || THEMES.DARK)

	const themeOption = useMemo(() => ({ theme, setTheme }), [theme])

	return (
		<ThemeProviderContext.Provider value={themeOption}>
			{children}
		</ThemeProviderContext.Provider>
	)
}
