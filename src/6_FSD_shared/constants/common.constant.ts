export const FAKE_AVATAR =
	"https://i.pinimg.com/originals/ca/a6/75/caa67500573fc83cc15de92646957e87.jpg"

export enum PagesNames {
	MAIN = "Main",
	ABOUT = "About",
	PROFILE = "Profile",
	ARTICLES = "Articles",
	ARTICLE_DETAILS = "ArticleDetails",
	ARTICLE_DETAILS_EDIT = "ArticleDetailEdit",
	ARTICLE_DETAILS_CREATE = "ArticleDetailsCreate",
	ADMIN_PANEL = "AdminPanel",
	FORBIDDEN = "FORBIDDEN",
	NOT_FOUND = "NotFound"
}

export enum PagesPaths {
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

export enum RequestPaths {
	ARTICLES = "/articles"
}
