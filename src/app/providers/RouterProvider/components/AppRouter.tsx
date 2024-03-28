import { Loader } from "@widgets/Loader"
import { type FC, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routerProviderConfig } from "../config/RouterProvider.config"

export const AppRouter: FC = () => (
	<Suspense fallback={<Loader />}>
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