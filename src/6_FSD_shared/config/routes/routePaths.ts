import { About, Home, Paper, ProfilePageIcon } from "@assets/index"
import { FC, SVGProps } from "react"

export enum PagesNames {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",
	ARTICLES = "Articles",
	ARTICLE_DETAILS = "ArticleDetails",
	NOT_FOUND = "NotFound"
}

export enum PagesPaths {
	MAIN = "/",
	ABOUT = "/about",
	PROFILE = "/profile",
	ARTICLES = "/articles",
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
		path: PagesPaths.ARTICLES,
		isRequiredUserId: false,
		inHeader: false,
		isRequireAuth: false
	},
	{
		name: PagesNames.NOT_FOUND,
		path: PagesPaths.NOT_FOUND,
		isRequiredUserId: false,
		inHeader: false,
		isRequireAuth: false
	}
]
