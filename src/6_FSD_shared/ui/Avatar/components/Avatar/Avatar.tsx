import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import type { ImgHTMLAttributes } from "react"
import { useMemo, memo } from "react"
import { AvatarSize, AvatarTheme } from "../../constants/Avatar.constant"
import styles from "./Avatar.module.scss"
import { AppImage } from "../../../AppImage"
import { AvatarIcon } from "@assets/index"
import { Skeleton, SkeletonTheme } from "../../../Skeleton"
import type { testingProps } from "@customTypes/testing.types"

type AvatarCustomProps = {
	className?: string
	theme?: AvatarTheme
	size?: AvatarSize
	inverted?: boolean
	src: string
	alt: string
}

type AvatarProps = AvatarCustomProps &
	Omit<ImgHTMLAttributes<HTMLImageElement>, keyof AvatarCustomProps> &
	testingProps

export const Avatar = memo<AvatarProps>(props => {
	const {
		className,
		size = AvatarSize.MIDDLE,
		alt,
		src,
		theme = AvatarTheme.CIRCLE,
		inverted,
		...otherProps
	} = props

	const modsErrorFallback: Mods = useMemo(() => {
		return {
			[styles.inverted]: inverted
		}
	}, [inverted])

	const errorFallback = useMemo(
		() => (
			<AvatarIcon
				className={classNamesHelp(styles.errorFallback, modsErrorFallback, [
					className,
					styles[size]
				])}
				data-testid={props["data-testid"]}
			/>
		),
		[className, modsErrorFallback, props, size]
	)

	const fallback = useMemo(
		() => (
			<Skeleton
				className={classNamesHelp(styles.Avatar, {}, [
					className,
					styles[theme],
					styles[size]
				])}
				data-testid={props["data-testid"]}
				theme={SkeletonTheme.CIRCLE}
			/>
		),
		[className, props, size, theme]
	)

	return (
		<AppImage
			src={src}
			alt={alt}
			fallback={fallback}
			errorFallback={errorFallback}
			className={classNamesHelp(styles.Avatar, {}, [className, styles[theme], styles[size]])}
			{...otherProps}
		/>
	)
})
