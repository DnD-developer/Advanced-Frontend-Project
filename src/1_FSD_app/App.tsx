import { useAuth } from "@entities/User"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { ErrorBoundaryProvider } from "@providers/ErrorBoundaryProvider"
import { RouterProvider } from "@providers/RouterProvider"
import { useTheme } from "@sharedProviders/ThemeProvider"
import { Header } from "@widgets/Header"
import { SideBar } from "@widgets/SideBar"
import { memo, useEffect } from "react"

const App = memo(() => {
	useTheme()

	const dispatch = useAppDispatch()
	const { initAuthData, _isInitAuthData } = useAuth()

	useEffect(() => {
		dispatch(initAuthData())
	}, [dispatch, initAuthData])

	return (
		<div className={"app"}>
			<ErrorBoundaryProvider>
				<Header />
				<div className="page-container">
					<SideBar />
					{_isInitAuthData && <RouterProvider />}
				</div>
			</ErrorBoundaryProvider>
		</div>
	)
})

export default App
