import "@app/styles/index.style.scss"

import { useTheme } from "@app/providers/ThemeContext"
import { AboutPage } from "@pages/AboutPage"
import { MainPage } from "@pages/MainPage"
import { ClassNames } from "@shared/helpers/ClassNames"
import { Header } from "@widgets/Header"
import { Loader } from "@widgets/Loader"
import { SwitchThemeButton } from "@widgets/SwitchThemeButton"

import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"

function App() {
	const { theme, switchTheme } = useTheme()
	return (
		<div className={ClassNames("app", {}, [theme])}>
			<Header />
			<SwitchThemeButton onClick={switchTheme} />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route
						path="/"
						element={<MainPage/>}
					/>
					<Route
						path="/about"
						element={<AboutPage/>}
					/>
				</Routes>
			</Suspense>
		</div>
	)
}

export default App