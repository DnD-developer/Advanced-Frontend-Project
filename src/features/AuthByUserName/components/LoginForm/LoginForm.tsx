import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { Input } from "@ui/Input"
import { Text } from "@ui/Text"
import { TextTheme } from "@ui/Text/components/Main/Text"
import { FormEvent, memo, useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { getLoginFormErrorSelector } from "../../store/selectors/getLoginFormError/getLoginFormError.selector"
import { getLoginFormIsLoadingSelector } from "../../store/selectors/getLoginFormIsLoading/getLoginFormIsLoading.selector"
import { getLoginFormPasswordSelector } from "../../store/selectors/getLoginFormPassword/getLoginFormPassword.selector"
import { getLoginFormUserNameSelector } from "../../store/selectors/getLoginFormUserName/getLoginFormUserName.selector"
import { loginFormActions } from "../../store/slices/loginForm.slice"
import { loginByUserNameThunk } from "../../store/thunks/loginByUserName/loginByUserName.thunk"
import styles from "./LoginForm.module.scss"

type LoginFormProps = {
	classNames?: string
	isVisible?: boolean
}
export const LoginForm = memo((props: LoginFormProps) => {
	const { classNames, isVisible = false } = props

	const { t } = useTranslation()

	const dispatch = useDispatch()
	const { setUserName, setPassword, resetForm } = loginFormActions

	const userName = useSelector(getLoginFormUserNameSelector)
	const password = useSelector(getLoginFormPasswordSelector)
	const isLoading = useSelector(getLoginFormIsLoadingSelector)
	const error = useSelector(getLoginFormErrorSelector)

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

	useEffect(() => {
		if (!isVisible) {
			dispatch(resetForm())
		}
	}, [dispatch, isVisible, resetForm])

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
				autoFocus={isVisible}
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
