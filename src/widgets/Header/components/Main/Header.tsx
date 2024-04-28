import { LoginModal } from "@features/AuthByUserName"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { Portal } from "@ui/Portal"
import { type FC, type PropsWithChildren, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./Header.module.scss"

type HeaderProps = {
	classNames?: string
} & PropsWithChildren
export const Header: FC<HeaderProps> = props => {
	const { classNames, children } = props

	const { t } = useTranslation()

	const [isAuthModal, setIsAuthModal] = useState(false)

	const loginModalShow = useCallback(() => {
		setIsAuthModal(true)
	}, [])
	const loginModalClose = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	return (
		<div className={classNamesHelp(styles.Header, {}, [classNames])}>
			{children}

			<div className={styles.links}>
				<Button
					theme={ButtonTheme.INVERTEDClEAR}
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
}
