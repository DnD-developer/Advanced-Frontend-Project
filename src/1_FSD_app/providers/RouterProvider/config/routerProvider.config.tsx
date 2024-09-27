import type { routeInfoType } from "@config/router/config/route.config"
import { routeConfig } from "@config/router/config/route.config"
import { type RouteProps } from "react-router"
import type { ReactNode } from "react"
import { MainPage } from "@pages/MainPage"
import { AboutPage } from "@pages/AboutPage"
import { ProfilePage } from "@pages/ProfilePage"
import { ArticlesPage } from "@pages/ArticlesPage"
import { ArticleDetailsPage } from "@pages/ArticleDetailsPage"
import { ArticleDetailsEditPage } from "@pages/ArticleDetailsEditPage"
import { NotFoundPage } from "@pages/NotFountPage"
import { AdminPanelPage } from "@pages/AdminPanelPage"
import { ForbiddenPage } from "@pages/ForbiddenPage"
import { PagesNames } from "@config/router"

export type CustomRouteProps = routeInfoType & RouteProps

export const mapperPageNameComponent: Record<PagesNames, ReactNode> = {
	[PagesNames.MAIN]: <MainPage />,
	[PagesNames.ABOUT]: <AboutPage />,
	[PagesNames.PROFILE]: <ProfilePage />,
	[PagesNames.ARTICLES]: <ArticlesPage />,
	[PagesNames.ARTICLE_DETAILS]: <ArticleDetailsPage />,
	[PagesNames.ARTICLE_DETAILS_EDIT]: <ArticleDetailsEditPage />,
	[PagesNames.ARTICLE_DETAILS_CREATE]: <ArticleDetailsEditPage />,
	[PagesNames.NOT_FOUND]: <NotFoundPage />,
	[PagesNames.ADMIN_PANEL]: <AdminPanelPage />,
	[PagesNames.FORBIDDEN]: <ForbiddenPage />
}

export const routerProviderConfig: CustomRouteProps[] = Object.entries(routeConfig).map(
	([routeName, routeInfo]) => {
		return { ...routeInfo, element: mapperPageNameComponent[routeName as PagesNames] }
	}
)
