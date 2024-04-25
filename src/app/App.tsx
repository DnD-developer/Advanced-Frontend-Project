import "@styles/index.style.scss"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { ErrorBoundaryProvider } from "@providers/ErrorBoundaryProvider"
import { AppRouter } from "@providers/RouterProvider"
import { useTheme } from "@providers/ThemeContext"
import { Header } from "@widgets/Header"
import { SideBar } from "@widgets/SideBar"
import { SwitchLangButton } from "@widgets/SwitchLangButton/components/SwitchLangButton"
import { SwitchThemeButton } from "@widgets/SwitchThemeButton"
import { type FC, Suspense } from "react"

const App: FC = () => {
	const { theme } = useTheme()

	return (
		<div className={classNamesHelp("app", {}, [theme])}>
			<ErrorBoundaryProvider>
				<Suspense>
					<Header />
					<div className="page-container">
						<SideBar>
							<SwitchThemeButton />
							<SwitchLangButton />
						</SideBar>
						<AppRouter />
					</div>
				</Suspense>
			</ErrorBoundaryProvider>
		</div>
	)
}

export default App
