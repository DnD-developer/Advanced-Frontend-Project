import { PagesPaths } from "@constants/common.constant"
import { useAuth } from "@entities/User"
import { memo, useMemo } from "react"
import { Navigate, useLocation } from "react-router-dom"
import type { CustomRouteProps } from "../../config/routerProvider.config"
import { AllowedRoles } from "./AllowedRoles"

type RequireAuthProps = {
	pageInfo: CustomRouteProps
}

export const RequireAuth = memo<RequireAuthProps>(props => {
	const { pageInfo } = props
	const location = useLocation()

	const { isAuth } = useAuth()
	const to = useMemo(() => ({ pathname: PagesPaths.MAIN, state: { from: location } }), [location])

	if (!isAuth && pageInfo.isRequiredAuth) {
		return <Navigate to={to} />
	}

	return <AllowedRoles allowedRoles={pageInfo.roles}>{pageInfo.element}</AllowedRoles>
})
