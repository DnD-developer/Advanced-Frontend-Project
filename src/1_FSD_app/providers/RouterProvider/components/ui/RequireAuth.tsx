import { useAuth } from "@entities/User"
import { memo, ReactNode, useMemo } from "react"
import { Navigate, useLocation } from "react-router-dom"

type RequireAuthProps = {
	isRequiredAuth?: boolean
	path: string
	element: ReactNode
}

export const RequireAuth = memo<RequireAuthProps>(props => {
	const { element, path, isRequiredAuth } = props
	const location = useLocation()

	const { isAuth } = useAuth()
	const to = useMemo(() => ({ pathname: path, state: { from: location } }), [location, path])

	if (!isAuth && isRequiredAuth) {
		return <Navigate to={to} />
	}

	return element
})
