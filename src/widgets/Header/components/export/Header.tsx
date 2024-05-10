import { getUserAuthDataSelector, userActions } from "@entities/User"
import { LoginModal } from "@features/AuthByUserName"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { Portal } from "@ui/Portal"
import { memo, type PropsWithChildren, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import styles from "./Header.module.scss"

type HeaderProps = {
	classNames?: string
} & PropsWithChildren
export const Header = memo<HeaderProps>(props => {
	const { classNames, children } = props

	const { t } = useTranslation()

	const [isAuthModal, setIsAuthModal] = useState(false)

	const authData = useSelector(getUserAuthDataSelector)
	const dispatch = useDispatch()
	const { logOut } = userActions

	const loginModalShow = useCallback(() => {
		setIsAuthModal(true)
	}, [])
	const loginModalClose = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const logOutHandler = useCallback(() => {
		loginModalClose()
		dispatch(logOut())
	}, [dispatch, logOut, loginModalClose])

	if (authData) {
		return (
			<div className={classNamesHelp(styles.Header, {}, [classNames])}>
				{children}
				<div className={styles.links}>
					<Button
						theme={ButtonTheme.CLEAR}
						inverted
						onClick={logOutHandler}
					>
						{t("translation:logout")}
					</Button>
				</div>
			</div>
		)
	}

	return (
		<div className={classNamesHelp(styles.Header, {}, [classNames])}>
			{children}
			<div className={styles.links}>
				<Button
					theme={ButtonTheme.CLEAR}
					inverted
					onClick={loginModalShow}
				>
					{t("translation:login")}
				</Button>
			</div>
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
