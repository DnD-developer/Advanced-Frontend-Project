import { userActions } from "@entities/User"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { ErrorBoundaryProvider } from "@providers/ErrorBoundaryProvider"
import { RouterProvider } from "@providers/RouterProvider"
import { useTheme } from "@providers/ThemeProvider"
import { Header } from "@widgets/Header"
import { SideBar } from "@widgets/SideBar"
import { SwitchLangButton } from "@widgets/SwitchLangButton/components/export/SwitchLangButton"
import { SwitchThemeButton } from "@widgets/SwitchThemeButton"
import { type FC, Suspense } from "react"
import { useDispatch } from "react-redux"

const App: FC = () => {
	const { theme } = useTheme()

	const dispatch = useDispatch()

	const { initAuthData } = userActions
	dispatch(initAuthData())

	return (
		<div className={classNamesHelp("app", {}, [theme])}>
			<ErrorBoundaryProvider>
				<Suspense>
					<Header />
					<div className="page-container">
						<SideBar
							SwitchLang={<SwitchLangButton />}
							SwitchTheme={<SwitchThemeButton />}
						/>
						<RouterProvider />
					</div>
				</Suspense>
			</ErrorBoundaryProvider>
		</div>
	)
}

export default App
