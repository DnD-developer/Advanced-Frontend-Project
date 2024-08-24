import { PageLoader } from "@widgets/PageLoader"
import { memo, Suspense, useCallback, useMemo } from "react"
import { Route } from "react-router"
import { Routes } from "react-router-dom"
import type { CustomRouteProps } from "../config/routerProvider.config"
import { routerProviderConfig } from "../config/routerProvider.config"
import { RequireAuth } from "./ui/RequireAuth"

export const RouterProvider = memo(() => {
	const pageWithWrapper = useCallback(
		(pageInfo: CustomRouteProps) => <RequireAuth pageInfo={pageInfo} />,
		[]
	)

	const _fallback = useMemo(() => <PageLoader />, [])

	return (
		<Suspense fallback={_fallback}>
			<Routes>
				{Object.values(routerProviderConfig).map(pageInfo => {
					return (
						<Route
							key={pageInfo.path}
							path={pageInfo.path}
							element={pageWithWrapper(pageInfo)}
						/>
					)
				})}
			</Routes>
		</Suspense>
	)
})
