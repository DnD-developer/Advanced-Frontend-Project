import { useAuth } from "@entities/User"
import { LoginModal } from "@features/AuthByUserName"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { Portal } from "@ui/Portal"
import { memo, type PropsWithChildren, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import styles from "./Header.module.scss"

type HeaderProps = {
	classNames?: string
} & PropsWithChildren
export const Header = memo<HeaderProps>(props => {
	const { classNames, children } = props

	const { t } = useTranslation()

	const [isAuthModal, setIsAuthModal] = useState(false)

	const dispatch = useDispatch()
	const { logOut, authData } = useAuth()

	const loginModalShow = useCallback(() => {
		setIsAuthModal(true)
	}, [])
	const loginModalClose = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const logOutHandler = useCallback(() => {
		if (__PROJECT__ !== "storybook") {
			dispatch(logOut())
		}
	}, [dispatch, logOut])

	const btnLogin = (
		<Button
			theme={ButtonTheme.CLEAR}
			inverted
			onClick={loginModalShow}
		>
			{t("translation:login")}
		</Button>
	)

	const btnLogOut = (
		<Button
			theme={ButtonTheme.CLEAR}
			inverted
			onClick={logOutHandler}
		>
			{t("translation:logout")}
		</Button>
	)

	return (
		<div className={classNamesHelp(styles.Header, {}, [classNames])}>
			{children}
			<div className={styles.links}>{authData ? btnLogOut : btnLogin}</div>
			<Portal>
				<LoginModal
					onClose={loginModalClose}
					isOpen={isAuthModal}
					lazy
				/>
			</Portal>
		</div>
	)
})
