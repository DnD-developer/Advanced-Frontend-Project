import "./styles/index.style.scss"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Loader } from "./components/Loader/Loader"
import { SwithThemeButton } from "./components/SwitchThemeButton/SwithThemeButton"
import { useTheme } from "./components/ThemeContext/hooks/useTheme"
import { ClassNames } from "./helpers/ClassNames"
import { AboutLazyPage } from "./pages/AboutPage/AboutLazy.page"
import { MainLazyPage } from "./pages/MainPage/MainLazy.page"

function App() {
	const { theme, switchTheme } = useTheme()
	return (
		<div className={ClassNames("app", {}, [theme])}>
			<Header />
			<SwithThemeButton onClick={switchTheme} />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route
						path="/"
						element={<MainLazyPage />}
					/>
					<Route
						path="/about"
						element={<AboutLazyPage />}
					/>
				</Routes>
			</Suspense>
		</div>
	)
}

export default App