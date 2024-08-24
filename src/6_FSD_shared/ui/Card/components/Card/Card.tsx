import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import type { HTMLAttributes, PropsWithChildren } from "react"
import { memo } from "react"
import styles from "./Card.module.scss"

type CardProps = {
	className?: string
} & PropsWithChildren &
	HTMLAttributes<HTMLDivElement>

export const Card = memo<CardProps>(props => {
	const { className, children, ...otherProps } = props

	return (
		<div
			className={classNamesHelp(styles.Card, {}, [className])}
			{...otherProps}
		>
			{children}
		</div>
	)
})
