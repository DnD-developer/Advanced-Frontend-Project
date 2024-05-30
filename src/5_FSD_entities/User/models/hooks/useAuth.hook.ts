import { useSelector } from "react-redux"
import { getUserAuthDataSelector } from "../store/selectors/getUserAuthData/getUserAuthData.selector"
import { getUserInitAuthDataSelector } from "../store/selectors/getUserInitAuthData/getUserInitAuthData.selector"
import { userActions } from "../store/slices/user.slice"

export const useAuth = () => {
	const authData = useSelector(getUserAuthDataSelector)
	const _isInitAuthData = useSelector(getUserInitAuthDataSelector)
	const { initAuthData, logOut, setAuthData } = userActions

	const isAuth = authData ? true : false

	return { isAuth, _isInitAuthData, authData, initAuthData, logOut, setAuthData }
}
