import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Page } from "@widgets/Page"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import styles from "./NotFoundPage.module.scss"

type NotFountPageProps = {
	classNames?: string
}
export const NotFoundPage = memo<NotFountPageProps>(props => {
	const { classNames } = props
	const { t } = useTranslation("notFoundPage")

	return (
		<Page
			className={styles.pageWrapper}
			data-testid={"notFoundPage"}
		>
			<h1 className={classNamesHelp("page-header", {}, [classNames, styles.pageHeader])}>
				{t("notFoundPage:pageTile")}
			</h1>
		</Page>
	)
})
