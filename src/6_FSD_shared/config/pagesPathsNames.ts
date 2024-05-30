import Home from "@assets/icons/home.svg"
import About from "@assets/icons/list.svg"
import Profile from "@assets/icons/man.svg"
import { FC, SVGProps } from "react"

export enum PagesNames {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",
	NOT_FOUND = "notFound"
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
		Icon: Profile,
		isRequireAuth: true
	},
	{ name: PagesNames.NOT_FOUND, path: "*", inHeader: false, isRequireAuth: false }
]
