import { getScrollPositionByPathSelector, scrollPositionActions } from "@features/ScrollSave"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { useInfinityScroll } from "@hooks/useInfinityScroll.hook"
import { useInitialEffect } from "@hooks/useInitialEffect.hook"
import { useThrottle } from "@hooks/useThrottle.hook"
import { memo, PropsWithChildren, UIEvent, useCallback } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import styles from "./Page.module.scss"

type PageProps = {
	className?: string
	onScrollEnd?: () => void
} & PropsWithChildren

export const Page = memo<PageProps>(props => {
	const { className, children, onScrollEnd } = props

	const [wrapperRef, triggerRef] = useInfinityScroll(onScrollEnd)

	const pathName = useLocation().pathname

	const dispatch = useAppDispatch()
	const { setScrollPosition } = scrollPositionActions
	const scrollPosition = useSelector(getScrollPositionByPathSelector(pathName))

	useInitialEffect(
		useCallback(() => {
			wrapperRef.current.scrollTop = scrollPosition
		}, [scrollPosition, wrapperRef])
	)

	const onScrollHandler = useThrottle(
		useCallback(
			(event: UIEvent<HTMLDivElement>) => {
				const scrollPosition = {
					[pathName]: event?.currentTarget.scrollTop
				}

				dispatch(setScrollPosition(scrollPosition))
			},
			[dispatch, pathName, setScrollPosition]
		),
		400
	)

	return (
		<section
			onScroll={onScrollHandler}
			ref={wrapperRef}
			className={classNamesHelp(styles.Page, {}, [className])}
		>
			{children}
			<div ref={triggerRef}></div>
		</section>
	)
})
