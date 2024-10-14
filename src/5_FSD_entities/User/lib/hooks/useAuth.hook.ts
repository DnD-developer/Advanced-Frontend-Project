import { useSelector } from "react-redux"
import { UserRoles } from "../../constants/userRoles.constant"
import { getUserAuthDataSelector } from "../../store/selectors/getUserAuthData/getUserAuthData.selector"
import { getUserInitAuthDataSelector } from "../../store/selectors/getUserInitAuthData/getUserInitAuthData.selector"
import { getUserRolesSelector } from "../../store/selectors/getUserRoles/getUserRoles.selector"
import { userActions } from "../../store/slices/user.slice"
import { fetchUserDataThunk } from "../../store/thunks/fetchUserData/fetchUserData.thunk"

export const useAuth = () => {
	const authData = useSelector(getUserAuthDataSelector)
	const _isInitAuthData = useSelector(getUserInitAuthDataSelector)
	const userRoles = useSelector(getUserRolesSelector)
	const { logOut, setAuthData } = userActions
	const fetchUserData = fetchUserDataThunk

	const isAdmin = userRoles?.includes(UserRoles.ADMIN)
	const isManager = userRoles?.includes(UserRoles.MANAGER)

	const isAuth = authData ? true : false

	return {
		isAuth,
		_isInitAuthData,
		authData,
		logOut,
		setAuthData,
		fetchUserData,
		isAdmin,
		isManager,
		userRoles
	}
}
