import { PagesPaths } from "@config/routes/routePaths"
import { useAuth, UserRoles } from "@entities/User"
import { memo, PropsWithChildren, useMemo } from "react"
import { Navigate, useLocation } from "react-router-dom"

type AllowedRolesProps = {
	allowedRoles?: UserRoles[]
} & PropsWithChildren

export const AllowedRoles = memo<AllowedRolesProps>(props => {
	const { children, allowedRoles } = props
	const location = useLocation()

	const { userRoles } = useAuth()
	const to = useMemo(
		() => ({ pathname: PagesPaths.FORBIDDEN, state: { from: location } }),
		[location]
	)

	const isAllowedRoles = allowedRoles?.some(rol => userRoles?.includes(rol)) ?? true

	if (!isAllowedRoles) {
		return <Navigate to={to} />
	}

	return children
})
