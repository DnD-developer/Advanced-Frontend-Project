import type { UserRoles } from "@entities/User"
import { useAuth } from "@entities/User"
import type { PropsWithChildren } from "react"
import { memo, useMemo } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { RoutePaths } from "@config/router/constants/routePath.constant"

type AllowedRolesProps = {
	allowedRoles?: UserRoles[]
} & PropsWithChildren

export const AllowedRoles = memo<AllowedRolesProps>(props => {
	const { children, allowedRoles } = props
	const location = useLocation()

	const { userRoles } = useAuth()
	const to = useMemo(
		() => ({ pathname: RoutePaths.FORBIDDEN, state: { from: location } }),
		[location]
	)

	const isAllowedRoles = allowedRoles?.some(rol => userRoles?.includes(rol)) ?? true

	if (!isAllowedRoles) {
		return <Navigate to={to} />
	}

	return children
})
