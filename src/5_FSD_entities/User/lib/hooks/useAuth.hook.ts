import { useCallback } from "react"
import { useSelector } from "react-redux"
import { UserRoles } from "../../constants/userRoles.constant"
import { getUserAuthDataSelector } from "../../store/selectors/getUserAuthData/getUserAuthData.selector"
import { getUserInitAuthDataSelector } from "../../store/selectors/getUserInitAuthData/getUserInitAuthData.selector"
import { getUserRolesSelector } from "../../store/selectors/getUserRoles/getUserRoles.selector"
import { userActions } from "../../store/slices/user.slice"
import { fetchUserDataThunk } from "../../store/thunks/fetchUserData/fetchUserData.thunk"
import {
	useGetUserSettingByKey,
	useGetUserSettings
} from "../../store/selectors/getUserSettings/getUserSettings.selector"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import type { THEMES } from "@sharedProviders/ThemeProvider"
import { saveUserSettingsThunk } from "../../store/thunks/saveUserSettings/saveUserSettings.thunk"

export const useAuth = () => {
	const authData = useSelector(getUserAuthDataSelector)
	const _isInitAuthData = useSelector(getUserInitAuthDataSelector)
	const userRoles = useSelector(getUserRolesSelector)
	const userTheme = useGetUserSettingByKey("theme")
	const userSettings = useGetUserSettings()
	const { logOut, setAuthData } = userActions
	const fetchUserData = fetchUserDataThunk

	const dispatch = useAppDispatch()

	const saveUserTheme = useCallback(
		(theme: THEMES) => {
			dispatch(saveUserSettingsThunk({ ...userSettings, theme }))
		},
		[dispatch, userSettings]
	)

	const isAdmin = userRoles?.includes(UserRoles.ADMIN)
	const isManager = userRoles?.includes(UserRoles.MANAGER)

	const isAuth = authData ? true : false

	return {
		isAuth,
		_isInitAuthData,
		authData,
		userTheme,
		saveUserTheme,
		logOut,
		setAuthData,
		fetchUserData,
		isAdmin,
		isManager,
		userRoles
	}
}
