import { PagesNames, PagesPaths, routesPath } from "@config/routes/routePaths"
import { AboutPage } from "@pages/AboutPage"
import { ArticleDetailsEditPage } from "@pages/ArticleDetailsEditPage"
import { ArticleDetailsPage } from "@pages/ArticleDetailsPage"
import { ArticlesPage } from "@pages/ArticlesPage"
import { MainPage } from "@pages/MainPage"
import { NotFoundPage } from "@pages/NotFountPage"
import { ProfilePage } from "@pages/ProfilePage"
import { type RouteProps } from "react-router"

const isRequiredAuth = (name: PagesNames) =>
	routesPath.find(route => route.name === name)?.isRequireAuth

type CustomRouteProps = { isRequiredAuth?: boolean } & RouteProps

export const routerProviderConfig: Record<PagesNames, CustomRouteProps> = {
	[PagesNames.MAIN]: {
		path: PagesPaths.MAIN,
		element: <MainPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.MAIN)
	},
	[PagesNames.ABOUT]: {
		path: PagesPaths.ABOUT,
		element: <AboutPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ABOUT)
	},
	[PagesNames.PROFILE]: {
		path: `${PagesPaths.PROFILE}/:id`,
		element: <ProfilePage />,
		isRequiredAuth: isRequiredAuth(PagesNames.PROFILE)
	},
	[PagesNames.ARTICLES]: {
		path: PagesPaths.ARTICLES,
		element: <ArticlesPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ARTICLES)
	},
	[PagesNames.ARTICLE_DETAILS]: {
		path: `${PagesPaths.ARTICLE_DETAILS}`,
		element: <ArticleDetailsPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ARTICLE_DETAILS)
	},
	[PagesNames.ARTICLE_DETAILS_EDIT]: {
		path: `${PagesPaths.ARTICLE_DETAILS_EDIT}`,
		element: <ArticleDetailsEditPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ARTICLE_DETAILS_EDIT)
	},
	[PagesNames.ARTICLE_DETAILS_CREATE]: {
		path: `${PagesPaths.ARTICLE_DETAILS_CREATE}`,
		element: <ArticleDetailsEditPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ARTICLE_DETAILS_CREATE)
	},
	[PagesNames.NOT_FOUND]: {
		path: PagesPaths.NOT_FOUND,
		element: <NotFoundPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.NOT_FOUND)
	}
}
