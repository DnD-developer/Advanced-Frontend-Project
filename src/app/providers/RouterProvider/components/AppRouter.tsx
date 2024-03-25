import { Loader } from "@widgets/Loader"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routerProviderConfig } from "../config/RouterProvider.config"

export const AppRouter = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{Object.values(routerProviderConfig).map(({ path, element }) => (
					<Route
						path={path}
						element={<div className="page-wrapper">{element}</div>}
					/>
				))}
			</Routes>
		</Suspense>
	)
}