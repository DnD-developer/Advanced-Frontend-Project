export enum RoutePaths {
	MAIN = "/",
	ABOUT = "/about",
	PROFILE = "/profile/:id",
	ARTICLES = "/articles",
	ARTICLE_DETAILS = "/articles/:id",
	ARTICLE_DETAILS_EDIT = "/articles/:id/edit",
	ARTICLE_DETAILS_CREATE = "/articles/new",
	ADMIN_PANEL = "/admin",
	FORBIDDEN = "/notAllowed",
	NOT_FOUND = "*"
}
