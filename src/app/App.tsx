import "@app/styles/index.style.scss"

import { useTheme } from "@app/providers/ThemeContext"
import { ClassNames } from "@shared/helpers/ClassNames"
import { Header } from "@widgets/Header"
import { SwitchThemeButton } from "@widgets/SwitchThemeButton"
import { AppRouter } from "./providers/RouterProvider"

function App() {
	const { theme, switchTheme } = useTheme()
	return (
		<div className={ClassNames("app", {}, [theme])}>
			<Header/>
			<SwitchThemeButton onClick={switchTheme} />
			<AppRouter/>
		</div>
	)
}

export default App