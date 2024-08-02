import { PagesPaths } from "@config/routes/routePaths"
import { useAuth } from "@entities/User"
import { LoginModal } from "@features/AuthByUserName"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppLink, AppLinkTheme } from "@ui/AppLink"
import { Button, ButtonTheme } from "@ui/Button"
import { Portal } from "@ui/Portal"
import { Text, TextSize } from "@ui/Text"
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
			<div className={styles.links}>
				<div className={styles.headerLeft}>
					<Text
						title={t("translation:welcomeToHell")}
						size={TextSize.BIG}
						inverted={true}
					/>
					{authData ?
						<AppLink
							theme={AppLinkTheme.OUTLINE}
							className={styles.createLink}
							to={PagesPaths.ARTICLE_DETAILS_CREATE}
							inverted={true}
						>
							{t("translation:createArticle")}
						</AppLink>
					:	null}
				</div>
				{authData ? btnLogOut : btnLogin}
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
