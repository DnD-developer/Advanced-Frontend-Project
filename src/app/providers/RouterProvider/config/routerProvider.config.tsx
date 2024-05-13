import { PagesNames, routesPath } from "@config/pagesPathsNames"
import { AboutPage } from "@pages/AboutPage"
import { MainPage } from "@pages/MainPage"
import { NotFoundPage } from "@pages/NotFountPage"
import { ProfilePage } from "@pages/ProfilePage"
import { type RouteProps } from "react-router"

const findPath = (name: PagesNames) => routesPath.find(route => route.name === name).path

export const routerProviderConfig: Record<PagesNames, RouteProps> = {
	[PagesNames.MAIN]: { path: findPath(PagesNames.MAIN), element: <MainPage /> },
	[PagesNames.ABOUT]: { path: findPath(PagesNames.ABOUT), element: <AboutPage /> },
	[PagesNames.PROFILE]: { path: findPath(PagesNames.PROFILE), element: <ProfilePage /> },
	[PagesNames.NOT_FOUND]: { path: findPath(PagesNames.NOT_FOUND), element: <NotFoundPage /> }
}
