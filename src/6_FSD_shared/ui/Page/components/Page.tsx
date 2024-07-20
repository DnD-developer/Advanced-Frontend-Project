import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useInfinityScroll } from "@hooks/useInfinityScroll.hook"
import { memo, PropsWithChildren } from "react"
import styles from "./Page.module.scss"

type PageProps = {
	className?: string
	onScrollEnd?: () => void
} & PropsWithChildren

export const Page = memo<PageProps>(props => {
	const { className, children, onScrollEnd } = props

	const [wrapperRef, triggerRef] = useInfinityScroll(onScrollEnd)

	return (
		<section
			ref={wrapperRef}
			className={classNamesHelp(styles.Page, {}, [className])}
		>
			{children}
			<div ref={triggerRef}></div>
		</section>
	)
})
