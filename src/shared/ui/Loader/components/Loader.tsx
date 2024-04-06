import { classNamesHelp } from "@lib/helpers/classNamesHelp/classNamesHelp"
import { type FC, type HtmlHTMLAttributes } from "react"
import styles from "./Loader.module.scss"

type LoaderProps = {
	classNames?: string
} & HtmlHTMLAttributes<HTMLDivElement>

export const Loader: FC<LoaderProps> = props => {
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
}
