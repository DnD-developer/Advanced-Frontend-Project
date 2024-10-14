import { useAuth } from "@entities/User"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { ErrorBoundaryProvider } from "@providers/ErrorBoundaryProvider"
import { RouterProvider } from "@providers/RouterProvider"
import { useTheme } from "@sharedProviders/ThemeProvider"
import { Header } from "@widgets/Header"
import { SideBar } from "@widgets/SideBar"
import { memo, useEffect } from "react"
import { PageLoader } from "@widgets/PageLoader"

const App = memo(() => {
	useTheme()

	const dispatch = useAppDispatch()
	const { _isInitAuthData, fetchUserData } = useAuth()

	useEffect(() => {
		dispatch(fetchUserData())
	}, [dispatch, fetchUserData])

	return (
		<div className={"app"}>
			<ErrorBoundaryProvider>
				{_isInitAuthData && <Header />}
				<div className="page-container">
					{_isInitAuthData && <SideBar />}
					{!_isInitAuthData && <PageLoader />}
					{_isInitAuthData && <RouterProvider />}
				</div>
			</ErrorBoundaryProvider>
		</div>
	)
})

export default App
