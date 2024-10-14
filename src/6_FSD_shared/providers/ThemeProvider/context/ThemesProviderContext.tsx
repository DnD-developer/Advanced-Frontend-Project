import { createContext } from "react"
import type { THEMES } from "../constants/Themes.constant"

export type ThemesProviderContextType = {
	theme?: THEMES
	setTheme?: (theme: THEMES) => void
	saveTheme?: (theme: THEMES) => void
}

export const ThemesProviderContext = createContext<ThemesProviderContextType>({})
