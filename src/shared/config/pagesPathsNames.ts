export enum PagesNames {
	MAIN = "Main",
	ABOUT = "About",
	NOT_FOUND = "Not Found"
}
type PagesInfo = {
	name: PagesNames
	path: string
	inHeader: boolean
}
export const routesPath: PagesInfo[] = [
	{ name: PagesNames.MAIN, path: "/", inHeader: true },
	{ name: PagesNames.ABOUT, path: "/about", inHeader: true },
	{ name: PagesNames.NOT_FOUND, path: "*", inHeader: false }
]
