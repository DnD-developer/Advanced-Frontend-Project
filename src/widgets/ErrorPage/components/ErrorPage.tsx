import { classNamesHelp } from "@lib/helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { type FC } from "react"
import { useTranslation } from "react-i18next"
import styles from "./ErrorPage.module.scss"

type ErrorPageProps = {
	classNames?: string
}
export const ErrorPage: FC<ErrorPageProps> = props => {
	const { classNames } = props
	const { t } = useTranslation()

	const onLoad = (): void => {
		location.reload()
	}

	return (
		<div className={classNamesHelp(styles.ErrorPage, {}, [classNames])}>
			<h1 className={styles.errorPageTitle}>{t("translation:unexpectedErrorTitle")}</h1>
			<Button
				onClick={onLoad}
				className={styles.errorPageButton}
				theme={ButtonTheme.OUTLINE}
			>
				{t("translation:reloadButton")}
			</Button>
		</div>
	)
}
