import { PagesNames, routesPath } from "@config/routes/pagesPathsNames"
import { AboutPage } from "@pages/AboutPage"
import { ArticleDetailsPage } from "@pages/ArticleDetailsPage"
import { ArticlesPage } from "@pages/ArticlesPage"
import { MainPage } from "@pages/MainPage"
import { NotFoundPage } from "@pages/NotFountPage"
import { ProfilePage } from "@pages/ProfilePage"
import { type RouteProps } from "react-router"

const findPath = (name: PagesNames) => routesPath.find(route => route.name === name)?.path
const isRequiredAuth = (name: PagesNames) =>
	routesPath.find(route => route.name === name)?.isRequireAuth

type CustomRouteProps = { isRequiredAuth?: boolean } & RouteProps

export const routerProviderConfig: Record<PagesNames, CustomRouteProps> = {
	[PagesNames.MAIN]: {
		path: findPath(PagesNames.MAIN),
		element: <MainPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.MAIN)
	},
	[PagesNames.ABOUT]: {
		path: findPath(PagesNames.ABOUT),
		element: <AboutPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ABOUT)
	},
	[PagesNames.PROFILE]: {
		path: findPath(PagesNames.PROFILE),
		element: <ProfilePage />,
		isRequiredAuth: isRequiredAuth(PagesNames.PROFILE)
	},
	[PagesNames.ARTICLES]: {
		path: findPath(PagesNames.ARTICLES),
		element: <ArticlesPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ARTICLES)
	},
	[PagesNames.ARTICLE_DETAILS]: {
		path: findPath(PagesNames.ARTICLE_DETAILS),
		element: <ArticleDetailsPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ARTICLE_DETAILS)
	},
	[PagesNames.NOT_FOUND]: {
		path: findPath(PagesNames.NOT_FOUND),
		element: <NotFoundPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.NOT_FOUND)
	}
}
