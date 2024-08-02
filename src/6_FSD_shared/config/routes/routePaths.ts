import { About, Home, Paper, ProfilePageIcon } from "@assets/index"
import { FC, SVGProps } from "react"

export enum PagesNames {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",
	ARTICLES = "articles",
	ARTICLE_DETAILS = "ArticleDetails",
	ARTICLE_DETAILS_EDIT = "ArticleDetailEdit",
	ARTICLE_DETAILS_CREATE = "ArticleDetailsCreate",
	NOT_FOUND = "NotFound"
}

export enum PagesPaths {
	MAIN = "/",
	ABOUT = "/about",
	PROFILE = "/profile",
	ARTICLES = "/articles",
	ARTICLE_DETAILS = "/articles/:id",
	ARTICLE_DETAILS_EDIT = "/articles/:id/edit",
	ARTICLE_DETAILS_CREATE = "/articles/new",
	NOT_FOUND = "*"
}

type pagesInfo = {
	name: PagesNames
	path: PagesPaths
	inHeader: boolean
	isRequireAuth: boolean
	isRequiredUserId: boolean
	Icon?: FC<SVGProps<SVGSVGElement>>
}

export const routesPath: pagesInfo[] = [
	{
		name: PagesNames.MAIN,
		path: PagesPaths.MAIN,
		inHeader: true,
		isRequiredUserId: false,
		Icon: Home,
		isRequireAuth: false
	},
	{
		name: PagesNames.ABOUT,
		path: PagesPaths.ABOUT,
		inHeader: true,
		isRequiredUserId: false,
		Icon: About,
		isRequireAuth: false
	},
	{
		name: PagesNames.PROFILE,
		path: PagesPaths.PROFILE,
		inHeader: true,
		isRequiredUserId: true,
		Icon: ProfilePageIcon,
		isRequireAuth: true
	},
	{
		name: PagesNames.ARTICLES,
		path: PagesPaths.ARTICLES,
		inHeader: true,
		Icon: Paper,
		isRequiredUserId: false,
		isRequireAuth: false
	},
	{
		name: PagesNames.ARTICLE_DETAILS,
		path: PagesPaths.ARTICLE_DETAILS,
		isRequiredUserId: false,
		inHeader: false,
		isRequireAuth: false
	},
	{
		name: PagesNames.ARTICLE_DETAILS_EDIT,
		path: PagesPaths.ARTICLE_DETAILS_EDIT,
		isRequiredUserId: false,
		inHeader: false,
		isRequireAuth: true
	},
	{
		name: PagesNames.ARTICLE_DETAILS_CREATE,
		path: PagesPaths.ARTICLE_DETAILS_CREATE,
		isRequiredUserId: false,
		inHeader: false,
		isRequireAuth: true
	},
	{
		name: PagesNames.NOT_FOUND,
		path: PagesPaths.NOT_FOUND,
		isRequiredUserId: false,
		inHeader: false,
		isRequireAuth: false
	}
]
