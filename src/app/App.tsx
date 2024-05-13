import { userActions } from "@entities/User"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { RouterProvider } from "@providers/RouterProvider"
import { useTheme } from "@providers/ThemeProvider"
import { Header } from "@widgets/Header"
import { SideBar } from "@widgets/SideBar"
import { SwitchLangButton } from "@widgets/SwitchLangButton/components/export/SwitchLangButton"
import { SwitchThemeButton } from "@widgets/SwitchThemeButton"
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
			<Header />
			<div className="page-container">
				<SideBar
					SwitchLang={<SwitchLangButton />}
					SwitchTheme={<SwitchThemeButton />}
				/>
				<RouterProvider />
			</div>
		</div>
	)
}

export default App
