export enum PagesNames {
	MAIN = "Main",
	ABOUT = "About"
}

export const routesPath: Record<PagesNames, string> = {
	[PagesNames.MAIN]: "/",
	[PagesNames.ABOUT]: "/about"
}