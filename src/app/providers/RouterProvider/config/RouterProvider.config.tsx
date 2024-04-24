import { PagesNames, routesPath } from "@config/pagesPathsNames"
import { AboutPage } from "@pages/AboutPage"
import { MainPage } from "@pages/MainPage"
import { NotFoundPage } from "@pages/NotFountPage"
import { type RouteProps } from "react-router"

export const routerProviderConfig: Record<string, RouteProps> = {
	[PagesNames.MAIN]: { path: routesPath[0].path, element: <MainPage /> },
	[PagesNames.ABOUT]: { path: routesPath[1].path, element: <AboutPage /> },
	[PagesNames.NOT_FOUND]: { path: routesPath[2].path, element: <NotFoundPage /> }
}
