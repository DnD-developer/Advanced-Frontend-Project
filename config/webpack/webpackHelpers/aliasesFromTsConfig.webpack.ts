import path from "node:path"

type aliasTsconfigType = Record<string, string[]>
type aliasWebpackConfigType = Record<string, string>

export const aliasesFromTsConfig = (
	compilerOptions: any,
	dirname: string
): aliasWebpackConfigType => {
	const { paths } = compilerOptions
	const aliases: aliasWebpackConfigType = {}

	Object.entries(paths as aliasTsconfigType).forEach(([keyA, pathA]) => {
		const alias = keyA.replace("/*", "")
		const pathAlias = pathA[0].replace("*", "")

		aliases[alias] = path.resolve(dirname, pathAlias)
	})

	return aliases
}
