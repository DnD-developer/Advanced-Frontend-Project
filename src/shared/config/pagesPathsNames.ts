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
type PagesInfo = {
	name: PagesNames
	Icon?: FC<SVGProps<SVGSVGElement>>
	path: string
	inHeader: boolean
}
export const routesPath: PagesInfo[] = [
	{ name: PagesNames.MAIN, path: "/", inHeader: true, Icon: Home },
	{ name: PagesNames.ABOUT, path: "/about", inHeader: true, Icon: About },
	{ name: PagesNames.PROFILE, path: "/profile", inHeader: true, Icon: Profile },
	{ name: PagesNames.NOT_FOUND, path: "*", inHeader: false }
]
