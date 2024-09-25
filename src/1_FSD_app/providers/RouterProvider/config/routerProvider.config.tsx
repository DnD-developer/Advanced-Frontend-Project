import { routesPath } from "@config/routes/routePaths"
import { PagesNames, PagesPaths } from "@constants/common.constant"
import type { UserRoles } from "@entities/User"
import { AboutPage } from "@pages/AboutPage"
import { AdminPanelPage } from "@pages/AdminPanelPage"
import { ArticleDetailsEditPage } from "@pages/ArticleDetailsEditPage"
import { ArticleDetailsPage } from "@pages/ArticleDetailsPage"
import { ArticlesPage } from "@pages/ArticlesPage"
import { ForbiddenPage } from "@pages/ForbiddenPage"
import { MainPage } from "@pages/MainPage"
import { NotFoundPage } from "@pages/NotFountPage"
import { ProfilePage } from "@pages/ProfilePage"
import { type RouteProps } from "react-router"

const isRequiredAuth = (name: PagesNames) =>
	routesPath.find(route => route.name === name)?.isRequireAuth
const allowedRoles = (name: PagesNames) =>
	routesPath.find(route => route.name === name)?.allowedRoles

export type CustomRouteProps = { isRequiredAuth?: boolean; roles?: UserRoles[] } & RouteProps

export const routerProviderConfig: Record<PagesNames, CustomRouteProps> = {
	[PagesNames.MAIN]: {
		path: PagesPaths.MAIN,
		element: <MainPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.MAIN),
		roles: allowedRoles(PagesNames.MAIN)
	},
	[PagesNames.ABOUT]: {
		path: PagesPaths.ABOUT,
		element: <AboutPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ABOUT),
		roles: allowedRoles(PagesNames.ABOUT)
	},
	[PagesNames.PROFILE]: {
		path: PagesPaths.PROFILE,
		element: <ProfilePage />,
		isRequiredAuth: isRequiredAuth(PagesNames.PROFILE),
		roles: allowedRoles(PagesNames.PROFILE)
	},
	[PagesNames.ARTICLES]: {
		path: PagesPaths.ARTICLES,
		element: <ArticlesPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ARTICLES),
		roles: allowedRoles(PagesNames.ARTICLES)
	},
	[PagesNames.ARTICLE_DETAILS]: {
		path: `${PagesPaths.ARTICLE_DETAILS}`,
		element: <ArticleDetailsPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ARTICLE_DETAILS),
		roles: allowedRoles(PagesNames.ARTICLE_DETAILS)
	},
	[PagesNames.ARTICLE_DETAILS_EDIT]: {
		path: `${PagesPaths.ARTICLE_DETAILS_EDIT}`,
		element: <ArticleDetailsEditPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ARTICLE_DETAILS_EDIT),
		roles: allowedRoles(PagesNames.ARTICLE_DETAILS_EDIT)
	},
	[PagesNames.ARTICLE_DETAILS_CREATE]: {
		path: `${PagesPaths.ARTICLE_DETAILS_CREATE}`,
		element: <ArticleDetailsEditPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ARTICLE_DETAILS_CREATE),
		roles: allowedRoles(PagesNames.ARTICLE_DETAILS_CREATE)
	},
	[PagesNames.NOT_FOUND]: {
		path: PagesPaths.NOT_FOUND,
		element: <NotFoundPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.NOT_FOUND),
		roles: allowedRoles(PagesNames.NOT_FOUND)
	},
	[PagesNames.ADMIN_PANEL]: {
		path: PagesPaths.ADMIN_PANEL,
		element: <AdminPanelPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.ADMIN_PANEL),
		roles: allowedRoles(PagesNames.ADMIN_PANEL)
	},
	[PagesNames.FORBIDDEN]: {
		path: PagesPaths.FORBIDDEN,
		element: <ForbiddenPage />,
		isRequiredAuth: isRequiredAuth(PagesNames.FORBIDDEN),
		roles: allowedRoles(PagesNames.FORBIDDEN)
	}
}
