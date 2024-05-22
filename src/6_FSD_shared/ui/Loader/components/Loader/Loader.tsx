import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { type HtmlHTMLAttributes, memo } from "react"
import styles from "./Loader.module.scss"

type LoaderProps = {
	classNames?: string
} & HtmlHTMLAttributes<HTMLDivElement>

export const Loader = memo<LoaderProps>(props => {
	const { classNames, ...otherProps } = props

	return (
		<div
			className={classNamesHelp(styles.circleSpinnerRolling5Ho1Oe8Irnh, {}, [classNames])}
			{...otherProps}
		>
			<div className={styles.circle}>
				<div></div>
			</div>
		</div>
	)
})
