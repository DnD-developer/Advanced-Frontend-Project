import { useAuth } from "@entities/User"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { ErrorBoundaryProvider } from "@providers/ErrorBoundaryProvider"
import { RouterProvider } from "@providers/RouterProvider"
import { useTheme, ThemesProvider } from "@sharedProviders/ThemeProvider"
import { Header } from "@widgets/Header"
import { SideBar } from "@widgets/SideBar"
import { memo, useEffect } from "react"
import { PageLoader } from "@widgets/PageLoader"

const App = memo(() => {
	useTheme()

	const dispatch = useAppDispatch()
	const { _isInitAuthData, fetchUserData, userTheme, saveUserTheme } = useAuth()

	useEffect(() => {
		dispatch(fetchUserData())
	}, [dispatch, fetchUserData])

	return (
		<ThemesProvider
			userTheme={userTheme}
			saveTheme={saveUserTheme}
		>
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
		</ThemesProvider>
	)
})

export default App
