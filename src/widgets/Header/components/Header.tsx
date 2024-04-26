import { classNamesHelp } from "@lib/helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { Modal } from "@ui/Modal"
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

	const loginModalHandler = useCallback(() => {
		setIsAuthModal(prev => !prev)
	}, [])

	return (
		<div className={classNamesHelp(styles.Header, {}, [classNames])}>
			{children}

			<div className={styles.links}>
				<Button
					theme={ButtonTheme.INVERTEDClEAR}
					onClick={loginModalHandler}
				>
					{t("translation:Login")}
				</Button>
			</div>
			<Portal>
				<Modal
					isOpen={isAuthModal}
					onClose={loginModalHandler}
				>
					{t("translation:textModal")}
				</Modal>
			</Portal>
		</div>
	)
}
