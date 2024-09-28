import { RoutePaths } from "../constants/routePath.constant"

export const getRouteMain = () => RoutePaths.MAIN
export const getRouteAbout = () => RoutePaths.ABOUT
export const getRouteProfile = (id?: string) => RoutePaths.PROFILE.replace(":id", id || "")
export const getRouteArticles = () => RoutePaths.ARTICLES
export const getRouteArticleDetails = (id?: string) =>
	RoutePaths.ARTICLE_DETAILS.replace(":id", id || "")
export const getRouteArticleDetailsEdit = (id?: string) =>
	RoutePaths.ARTICLE_DETAILS_EDIT.replace(":id", id || "")
export const getRouteArticleDetailsCreate = () => RoutePaths.ARTICLE_DETAILS_CREATE
export const getRouteAdminPanel = () => RoutePaths.ADMIN_PANEL
