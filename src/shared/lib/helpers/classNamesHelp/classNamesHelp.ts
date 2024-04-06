type Mods = Record<string, string | boolean>

export function classNamesHelp(cls: string, mods: Mods = {}, additional: string[] = []): string {
	return [
		cls,
		...additional.filter(cls => Boolean(cls)),
		...Object.entries(mods)
			.filter(([_, status]) => Boolean(status))
			.map(([clsName]) => clsName)
	].join(" ")
}
