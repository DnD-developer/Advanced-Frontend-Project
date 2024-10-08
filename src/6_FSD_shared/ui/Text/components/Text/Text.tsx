import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { memo, useMemo } from "react"
import { TextAlign, TextSize, TextTheme } from "../../constants/Text.constant"
import styles from "./Text.module.scss"

type TextProps = {
	className?: string
	theme?: TextTheme
	inverted?: boolean
	text?: string
	classNamesText?: string
	title?: string
	classNameTitle?: string
	size?: TextSize
	align?: TextAlign
}
type TitleTagType = "h2" | "h3" | "h4"

const titleTagsMap: Record<TextSize, TitleTagType> = {
	[TextSize.BIG]: "h2",
	[TextSize.NORMAL]: "h3",
	[TextSize.SMALL]: "h4"
}

export const Text = memo<TextProps>(props => {
	const {
		className,
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

	const modsText = useMemo<Mods>(() => {
		return { [styles.textMargin]: title ? true : false }
	}, [title])

	const TitleTag = titleTagsMap[size]

	return (
		<div
			className={classNamesHelp(styles.TextWrapper, mods, [
				className,
				styles[theme],
				styles[size],
				styles[align]
			])}
		>
			{title ?
				<TitleTag className={classNamesHelp(styles.title, {}, [classNameTitle])}>
					{title}
				</TitleTag>
			:	null}
			{text ?
				<p className={classNamesHelp(styles.text, modsText, [classNamesText])}>{text}</p>
			:	null}
		</div>
	)
})
