export type paramsType<T extends string | number> = Record<string, T>

export function createQueryParams<T extends string | number>(params?: paramsType<T>) {
	const searchParams = new URLSearchParams(window.location.search)

	if (!params) return null

	Object.entries(params).forEach(([paramName, paramValue]) => {
		if (paramValue !== undefined) {
			searchParams.set(paramName, paramValue.toString())
		}
	})

	return `?${searchParams}`
}

export function addQueryParams<T extends string | number>(params?: paramsType<T>) {
	window.history.pushState(undefined, "", createQueryParams(params))
}
