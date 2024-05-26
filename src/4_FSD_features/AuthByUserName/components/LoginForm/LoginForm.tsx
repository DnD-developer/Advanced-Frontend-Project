import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { Button, ButtonTheme } from "@ui/Button"
import { Input } from "@ui/Input"
import { Text } from "@ui/Text"
import { TextTheme } from "@ui/Text/components/Text/Text"
import { FormEvent, memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getLoginFormErrorSelector } from "../../models/store/selectors/getLoginFormError/getLoginFormError.selector"
import { getLoginFormIsLoadingSelector } from "../../models/store/selectors/getLoginFormIsLoading/getLoginFormIsLoading.selector"
import { getLoginFormPasswordSelector } from "../../models/store/selectors/getLoginFormPassword/getLoginFormPassword.selector"
import { getLoginFormUserNameSelector } from "../../models/store/selectors/getLoginFormUserName/getLoginFormUserName.selector"
import { loginFormActions, loginFormReducer } from "../../models/store/slices/loginForm.slice"
import { loginByUserNameThunk } from "../../models/store/thunks/loginByUserName/loginByUserName.thunk"
import styles from "./LoginForm.module.scss"

export type LoginFormProps = {
	classNames?: string
	onSuccess?: () => void
}

const asyncReducers: asyncReducersList = {
	loginForm: loginFormReducer
}
const LoginForm = memo<LoginFormProps>(props => {
	const { classNames, onSuccess } = props

	const { t } = useTranslation()

	const dispatch = useAppDispatch()
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
		async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault()

			if (__PROJECT__ !== "storybook") {
				const result = await dispatch(loginByUserNameThunk({ userName, password }))

				if (result.meta.requestStatus === "fulfilled") {
					onSuccess?.()
				}
			}
		},
		[dispatch, onSuccess, password, userName]
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
				readOnly={isLoading}
				value={userName}
			/>
			<Input
				classNamesLabel={styles.label}
				label={t("translation:password")}
				onChange={onChangePassword}
				readOnly={isLoading}
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
