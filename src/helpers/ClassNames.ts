type Mods = Record<string, string | boolean>
export function ClassNames(cls: string, mods: Mods, additional: string[]): string {
	return [
		cls,
		...additional,
		Object.entries(mods)
			.filter(([clsName, status]) => Boolean(status))
			.map(([clsName, status]) => clsName)
	].join(" ")
}