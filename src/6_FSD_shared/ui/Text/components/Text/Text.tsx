import { classNamesHelp, Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { memo, useMemo } from "react"
import { TextAlign, TextSize, TextTheme } from "./Test.type"
import styles from "./Text.module.scss"

type TextProps = {
	classNames?: string
	theme?: TextTheme
	inverted?: boolean
	text?: string
	classNamesText?: string
	title?: string
	classNameTitle?: string
	size?: TextSize
	align?: TextAlign
}

export const Text = memo<TextProps>(props => {
	const {
		classNames,
		theme = TextTheme.PRIMARY,
		inverted = false,
		text,
		classNamesText,
		title,
		classNameTitle,
		size = TextSize.NORMAL,
		align = TextAlign.LEFT
	} = props

	const mods = useMemo<Mods>(() => {
		return { [styles.inverted]: inverted }
	}, [inverted])

	return (
		<div
			className={classNamesHelp(styles.TextWrapper, mods, [
				classNames,
				styles[theme],
				styles[size],
				styles[align]
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
