import { createContext } from "react"

export enum THEMES {
	DARK = "app-dark-theme",
	LIGHT = "app-light-theme"
}

export type ThemeProviderProps = {
	theme?: THEMES
	setTheme?: (theme: THEMES) => void
}

export const ThemeProviderContext = createContext<ThemeProviderProps>({})

export const LOCAL_STORAGE_THEME_KEY = "theme"
