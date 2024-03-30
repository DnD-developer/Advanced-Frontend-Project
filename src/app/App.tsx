import "@app/styles/index.style.scss"

import { useTheme } from "@app/providers/ThemeContext"
import { classNamesHelp } from "@lib/helpers/classNamesHelp"
import { Header } from "@widgets/Header"
import { SideBar } from "@widgets/SideBar"
import { SwitchLangButton } from "@widgets/SwitchLangButton/components/SwitchLangButton"
import { SwitchThemeButton } from "@widgets/SwitchThemeButton"
import { type FC, Suspense } from "react"
import styles from "./App.module.scss"
import { AppRouter } from "./providers/RouterProvider"

const App: FC = () => {
	const { theme } = useTheme()
	return (
		<div className={classNamesHelp("app", {}, [theme])}>
			<Suspense>
				<Header />
				<div className="page-container">
					<SideBar>
						<SwitchThemeButton />
						<SwitchLangButton classNames={styles.SwitchThemeButton} />
					</SideBar>
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App
