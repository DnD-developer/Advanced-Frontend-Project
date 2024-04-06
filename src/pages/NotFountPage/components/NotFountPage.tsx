import { classNamesHelp } from "@lib/helpers/classNamesHelp/classNamesHelp"
import { type FC } from "react"
import { useTranslation } from "react-i18next"
import styles from "./NotFountPage.module.scss"

type NotFountPageProps = {
	classNames?: string
}
export const NotFountPage: FC<NotFountPageProps> = props => {
	const { classNames } = props
	const { t } = useTranslation("notFoundPage")

	return (
		<div className={styles.pageWrapper}>
			<h1 className={classNamesHelp("page-header", {}, [classNames, styles.pageHeader])}>
				{t("notFoundPage:pageTile")}
			</h1>
		</div>
	)
}
