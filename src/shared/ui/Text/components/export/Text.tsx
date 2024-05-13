import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { memo } from "react"
import styles from "./Text.module.scss"

type TextProps = {
	classNames?: string
	theme?: TextTheme
	inverted?: boolean
	text?: string
	classNamesText?: string
	title?: string
	classNameTitle?: string
}

export enum TextTheme {
	PRIMARY = "primary",
	ERROR = "error"
}
export const Text = memo<TextProps>(props => {
	const {
		classNames,
		theme = TextTheme.PRIMARY,
		inverted = false,
		text,
		classNamesText,
		title,
		classNameTitle
	} = props

	return (
		<div
			className={classNamesHelp(styles.TextWrapper, { [styles.inverted]: inverted }, [
				classNames,
				styles[theme]
			])}
		>
			{title ?
				<p className={classNamesHelp(styles.title, {}, [classNameTitle])}>{title}</p>
			:	null}
			{text ?
				<p className={classNamesHelp(styles.text, {}, [classNamesText])}>{text}</p>
			:	null}
		</div>
	)
})
