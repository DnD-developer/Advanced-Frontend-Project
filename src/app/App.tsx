import "@app/styles/index.style.scss"

import { useTheme } from "@app/providers/ThemeContext"
import { ClassNames } from "@lib/helpers/ClassNames"
import { Header } from "@widgets/Header"
import { SideBar } from "@widgets/SideBar"
import { SwitchThemeButton } from "@widgets/SwitchThemeButton"
import { AppRouter } from "./providers/RouterProvider"

function App() {
	const { theme } = useTheme()
	return (
		<div className={ClassNames("app", {}, [theme])}>
			<Header />
			<div className="page-container">
				<SideBar>
					<SwitchThemeButton />
				</SideBar>
				<AppRouter />
			</div>
		</div>
	)
}

export default App