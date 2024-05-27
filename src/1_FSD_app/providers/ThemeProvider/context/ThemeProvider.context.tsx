import { createContext } from "react"

export enum THEMES {
	DARK = "app-dark-theme",
	LIGHT = "app-light-theme",
	GREEN = "app-green-theme"
}

export type ThemeProviderProps = {
	theme?: THEMES
	setTheme?: (theme: THEMES) => void
}

export const ThemeProviderContext = createContext<ThemeProviderProps>({})
