import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAsyncReducer } from "@lib/hooks/useAsyncReducer.hook"
import { ReducersMapObject } from "@reduxjs/toolkit"
import { mainStateAsyncMap } from "@store/storeTypes/mainStateAsync.map"
import { Button, ButtonTheme } from "@ui/Button"
import { Input } from "@ui/Input"
import { Text } from "@ui/Text"
import { TextTheme } from "@ui/Text/components/export/Text"
import { FormEvent, memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { getLoginFormErrorSelector } from "../../store/selectors/getLoginFormError/getLoginFormError.selector"
import { getLoginFormIsLoadingSelector } from "../../store/selectors/getLoginFormIsLoading/getLoginFormIsLoading.selector"
import { getLoginFormPasswordSelector } from "../../store/selectors/getLoginFormPassword/getLoginFormPassword.selector"
import { getLoginFormUserNameSelector } from "../../store/selectors/getLoginFormUserName/getLoginFormUserName.selector"
import { loginFormActions, loginFormReducer } from "../../store/slices/loginForm.slice"
import { loginByUserNameThunk } from "../../store/thunks/loginByUserName/loginByUserName.thunk"
import styles from "./LoginForm.module.scss"

export type LoginFormProps = {
	classNames?: string
}

const asyncReducers: ReducersMapObject<mainStateAsyncMap> = {
	loginForm: loginFormReducer
}
const LoginForm = memo<LoginFormProps>(props => {
	const { classNames } = props

	const { t } = useTranslation()

	const dispatch = useDispatch()
	const { setUserName, setPassword } = loginFormActions

	const userName = useSelector(getLoginFormUserNameSelector)
	const password = useSelector(getLoginFormPasswordSelector)
	const isLoading = useSelector(getLoginFormIsLoadingSelector)
	const error = useSelector(getLoginFormErrorSelector)

	useAsyncReducer(asyncReducers)

	const errorText =
		error?.noUser ? t("translation:errorTextNoUser") : t("translation:errorTextOtherError")

	const onChangeUserName = useCallback(
		(value: string) => {
			dispatch(setUserName(value))
		},
		[dispatch, setUserName]
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(setPassword(value))
		},
		[dispatch, setPassword]
	)

	const onLogin = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			event.preventDefault()

			dispatch(loginByUserNameThunk({ userName, password }))
		},
		[dispatch, password, userName]
	)

	return (
		<form
			onSubmit={onLogin}
			className={classNamesHelp(styles.LoginForm, {}, [classNames])}
		>
			<Text title={t("translation:nameLoginForm")} />

			{error ?
				<Text
					theme={TextTheme.ERROR}
					text={errorText}
					classNames={styles.error}
				/>
			:	<></>}
			<Input
				classNamesLabel={styles.label}
				label={t("translation:userName")}
				autoFocus
				onChange={onChangeUserName}
				value={userName}
			/>
			<Input
				classNamesLabel={styles.label}
				label={t("translation:password")}
				onChange={onChangePassword}
				value={password}
			/>
			<Button
				type="submit"
				theme={ButtonTheme.OUTLINE}
				className={styles.submitBtn}
				disabled={isLoading}
			>
				{t("translation:login")}
			</Button>
		</form>
	)
})

export default LoginForm
