import type { PagesPaths } from "@constants/common.constant"

export function addIdInPagePath(path: PagesPaths, id: any) {
	const pathToChange = path

	return pathToChange.replace(":id", id)
}
