import { createContext } from "react"

export enum THEMES {
	DARK = "dark",
	LIGHT = "light"
}

export type ThemeProviderProps = {
	theme?: THEMES
	setTheme?: (theme: THEMES) => void
}

export const ThemeProviderContext = createContext<ThemeProviderProps>({})

export const LOCAL_STORAGE_THEME_KEY = "theme"
