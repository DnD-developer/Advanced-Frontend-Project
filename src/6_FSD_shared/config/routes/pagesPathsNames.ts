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

type pagesInfo = {
	name: PagesNames
	path: string
	inHeader: boolean
	isRequireAuth: boolean
	Icon?: FC<SVGProps<SVGSVGElement>>
}

export const routesPath: pagesInfo[] = [
	{ name: PagesNames.MAIN, path: "/", inHeader: true, Icon: Home, isRequireAuth: false },
	{ name: PagesNames.ABOUT, path: "/about", inHeader: true, Icon: About, isRequireAuth: false },
	{
		name: PagesNames.PROFILE,
		path: "/profile",
		inHeader: true,
		Icon: ProfilePageIcon,
		isRequireAuth: true
	},
	{
		name: PagesNames.ARTICLES,
		path: "/articles",
		inHeader: true,
		Icon: Paper,
		isRequireAuth: true
	},
	{
		name: PagesNames.ARTICLE_DETAILS,
		path: "/articles/:id",
		inHeader: false,
		isRequireAuth: true
	},
	{ name: PagesNames.NOT_FOUND, path: "*", inHeader: false, isRequireAuth: false }
]
