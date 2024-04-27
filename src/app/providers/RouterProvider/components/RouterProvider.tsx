import { PageLoader } from "@widgets/PageLoader"
import { type FC, Suspense } from "react"
import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { routerProviderConfig } from "../config/routerProvider.config"

export const RouterProvider: FC = () => (
	<Suspense fallback={<PageLoader />}>
		<Routes>
			{Object.values(routerProviderConfig).map(({ path, element }) => (
				<Route
					key={path}
					path={path}
					element={<div className="page-wrapper">{element}</div>}
				/>
			))}
		</Routes>
	</Suspense>
)
