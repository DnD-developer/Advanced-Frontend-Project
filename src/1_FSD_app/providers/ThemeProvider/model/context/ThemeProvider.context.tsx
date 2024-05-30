import { createContext } from "react"
import { THEMES } from "./ThemeProviderContext.type"

export type ThemeProviderProps = {
	theme?: THEMES
	setTheme?: (theme: THEMES) => void
}

export const ThemeProviderContext = createContext<ThemeProviderProps>({})
