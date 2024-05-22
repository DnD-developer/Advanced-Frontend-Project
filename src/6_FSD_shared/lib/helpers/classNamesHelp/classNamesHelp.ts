export type Mods = Record<string, string | boolean | undefined>

export function classNamesHelp(
	cls: string,
	mods: Mods = {},
	additional: (string | undefined)[] = []
): string {
	return [
		cls,
		...additional.filter(cls => Boolean(cls)),
		...Object.entries(mods)
			.filter(([_, status]) => Boolean(status))
			.map(([clsName]) => clsName)
	].join(" ")
}
