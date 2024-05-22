import { userActions } from "@entities/User"
import { useTheme } from "@features/SwitchTheme"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { ErrorBoundaryProvider } from "@providers/ErrorBoundaryProvider"
import { RouterProvider } from "@providers/RouterProvider"
import { Header } from "@widgets/Header"
import { SideBar } from "@widgets/SideBar"
import { type FC, useEffect } from "react"

const App: FC = () => {
	const { theme } = useTheme()

	const dispatch = useAppDispatch()
	const { initAuthData } = userActions

	useEffect(() => {
		dispatch(initAuthData())
	}, [dispatch, initAuthData])

	return (
		<div className={classNamesHelp("app", {}, [theme])}>
			<ErrorBoundaryProvider>
				<Header />
				<div className="page-container">
					<SideBar />
					<RouterProvider />
				</div>
			</ErrorBoundaryProvider>
		</div>
	)
}

export default App
