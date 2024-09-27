import { useAuth } from "@entities/User"
import { memo, useMemo } from "react"
import { Navigate, useLocation } from "react-router-dom"
import type { CustomRouteProps } from "../../config/routerProvider.config"
import { AllowedRoles } from "./AllowedRoles"
import { RoutePaths } from "@config/router/constants/routePath.constant"

type RequireAuthProps = {
	pageInfo: CustomRouteProps
}

export const RequireAuth = memo<RequireAuthProps>(props => {
	const { pageInfo } = props
	const location = useLocation()

	const { isAuth } = useAuth()
	const to = useMemo(() => ({ pathname: RoutePaths.MAIN, state: { from: location } }), [location])

	if (!isAuth && pageInfo.isRequireAuth) {
		return <Navigate to={to} />
	}

	return <AllowedRoles allowedRoles={pageInfo.requiredRoles}>{pageInfo.element}</AllowedRoles>
})
