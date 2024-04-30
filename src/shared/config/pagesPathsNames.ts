import Home from "@assets/icons/home.svg"
import About from "@assets/icons/list.svg"
import { FC, SVGProps } from "react"

export enum PagesNames {
	MAIN = "main",
	ABOUT = "about",
	NOT_FOUND = "Not Found"
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
	{ name: PagesNames.NOT_FOUND, path: "*", inHeader: false }
]
