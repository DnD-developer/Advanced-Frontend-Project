import { PagesNames, routesPath } from "@config/pagesPathsNames"
import { AboutPage } from "@pages/AboutPage"
import { MainPage } from "@pages/MainPage"
import { RouteProps } from "react-router"

export const routerProviderConfig: Record<string, RouteProps> = {
	[PagesNames.MAIN]: { path: routesPath.Main, element: <MainPage /> },
	[PagesNames.ABOUT]: { path: routesPath.About, element: <AboutPage /> }
}