import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { CSSProperties, memo, useMemo } from "react"
import { SkeletonTheme } from "../../constants/Skeleton.constant"
import styles from "./Skeleton.module.scss"

type SkeletonProps = {
	className?: string
	theme?: SkeletonTheme
	width?: number | string
	height?: number | string
	borderRadius?: number | string
}

export const Skeleton = memo<SkeletonProps>(props => {
	const { className, theme = SkeletonTheme.RECTANGLE, width, height, borderRadius } = props

	const stylesCSS = useMemo<CSSProperties>(() => {
		return {
			width,
			height,
			borderRadius
		}
	}, [borderRadius, height, width])

	return (
		<div
			className={classNamesHelp(styles.Skeleton, {}, [className, styles[theme]])}
			style={stylesCSS}
		></div>
	)
})
