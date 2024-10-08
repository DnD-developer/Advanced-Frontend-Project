import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Loader } from "@ui/Loader"
import { memo } from "react"
import styles from "./PageLoader.module.scss"

type PageLoaderProps = {
	classNames?: string
}
export const PageLoader = memo<PageLoaderProps>(props => {
	const { classNames } = props

	return (
		<div className={classNamesHelp(styles.PageLoader, {}, [classNames])}>
			<Loader />
		</div>
	)
})
