import { useSelector } from "react-redux"
import { UserRoles } from "../../constants/userRoles.constant"
import { getUserAuthDataSelector } from "../../store/selectors/getUserAuthData/getUserAuthData.selector"
import { getUserInitAuthDataSelector } from "../../store/selectors/getUserInitAuthData/getUserInitAuthData.selector"
import { getUserRolesSelector } from "../../store/selectors/getUserRoles/getUserRoles.selector"
import { userActions } from "../../store/slices/user.slice"

export const useAuth = () => {
	const authData = useSelector(getUserAuthDataSelector)
	const _isInitAuthData = useSelector(getUserInitAuthDataSelector)
	const userRoles = useSelector(getUserRolesSelector)
	const { initAuthData, logOut, setAuthData } = userActions

	const isAdmin = userRoles?.includes(UserRoles.ADMIN)
	const isManager = userRoles?.includes(UserRoles.MANAGER)

	const isAuth = authData ? true : false

	return {
		isAuth,
		_isInitAuthData,
		authData,
		initAuthData,
		logOut,
		setAuthData,
		isAdmin,
		isManager,
		userRoles
	}
}
