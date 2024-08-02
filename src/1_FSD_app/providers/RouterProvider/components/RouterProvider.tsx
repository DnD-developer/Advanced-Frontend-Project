import { PagesPaths } from "@config/routes/routePaths"
import { PageLoader } from "@widgets/PageLoader"
import { memo, ReactNode, Suspense, useCallback, useMemo } from "react"
import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { routerProviderConfig } from "../config/routerProvider.config"
import { RequireAuth } from "./ui/RequireAuth"

export const RouterProvider = memo(() => {
	const pageWithWrapper = useCallback(
		(element: ReactNode, isRequiredAuth: boolean | undefined) => (
			<RequireAuth
				isRequiredAuth={isRequiredAuth}
				path={PagesPaths.MAIN}
				element={element}
			/>
		),
		[]
	)

	const _fallback = useMemo(() => <PageLoader />, [])

	return (
		<Suspense fallback={_fallback}>
			<Routes>
				{Object.values(routerProviderConfig).map(({ path, element, isRequiredAuth }) => {
					return (
						<Route
							key={path}
							path={path}
							element={pageWithWrapper(element, isRequiredAuth)}
						/>
					)
				})}
			</Routes>
		</Suspense>
	)
})
