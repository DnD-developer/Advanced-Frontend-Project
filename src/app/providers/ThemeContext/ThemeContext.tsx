import {createContext} from 'react';

export enum THEMES {
	DARK = 'dark',
	LIGHT = 'light',
}

export type ThemeContextProps = {
	theme?: THEMES;
	setTheme?: (theme: THEMES) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
