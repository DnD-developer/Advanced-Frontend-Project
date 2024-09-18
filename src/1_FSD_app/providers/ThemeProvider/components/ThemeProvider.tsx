import { LOCAL_STORAGE_THEME_KEY } from "@constants/localStorage.constant"
import { memo, type PropsWithChildren, useMemo, useState } from "react"
import { THEMES } from "../constants/ThemeProviderContext.constant"
import { ThemeProviderContext } from "../context/ThemeProvider.context"

const defaultTheme: THEMES = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEMES

export const ThemesProvider = memo<PropsWithChildren>(({ children }) => {
	const [theme, setTheme] = useState<THEMES>(defaultTheme || THEMES.DARK)

	const themeOption = useMemo(() => ({ theme, setTheme }), [theme])

	return (
		<ThemeProviderContext.Provider value={themeOption}>
			{children}
		</ThemeProviderContext.Provider>
	)
})
