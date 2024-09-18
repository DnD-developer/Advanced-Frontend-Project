import { createContext } from "react"
import type { THEMES } from "../constants/ThemeProviderContext.constant"

export type ThemeProviderProps = {
	theme?: THEMES
	setTheme?: (theme: THEMES) => void
}

export const ThemeProviderContext = createContext<ThemeProviderProps>({})
