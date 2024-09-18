import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AnimationProvider, useAnimation } from "@sharedProviders/AnimationProvider"
import type { Handler, UserDragConfig } from "@use-gesture/react"
import type { ReactNode } from "react"
import { memo, useCallback, useEffect, useMemo } from "react"
import { Card } from "../../../Card"
import { Overlay } from "../../../Overlay"
import { Portal } from "../../../Portal"
import styles from "./Drawer.module.scss"

type DrawerProps = {
	className?: string
	content?: ReactNode
	isOpen: boolean
	onClose?: () => void
}

const height = window.innerHeight - 100

const DrawerContent = (props: DrawerProps) => {
	const { className, content, isOpen = false, onClose } = props

	const { Gesture, Spring } = useAnimation()

	const [{ y }, api] = Spring.useSpring(useCallback(() => ({ y: height }), []))

	const openDrawer = useCallback(() => {
		api.start({ y: 0, immediate: false })
	}, [api])

	useEffect(() => {
		if (isOpen) {
			openDrawer()
		}
	}, [api, isOpen, openDrawer])

	const close = useCallback(
		(velocity = 0) => {
			api.start({
				y: height,
				immediate: false,
				config: { ...Spring.config.stiff, velocity },
				onResolve: onClose
			})
		},
		[Spring.config.stiff, api, onClose]
	)

	const configBind = useMemo<UserDragConfig>(
		() => ({
			from: () => [0, y.get()],
			filterTaps: true,
			bounds: { top: 0 },
			rubberband: true
		}),
		[y]
	)

	const bindHandler = useCallback<Handler<any>>(
		({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
			if (my < -70) cancel()

			if (last) {
				if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
					close()
				} else {
					openDrawer()
				}
			} else {
				api.start({ y: my, immediate: true })
			}
		},
		[api, close, openDrawer]
	)

	const bind = Gesture.useDrag(bindHandler, configBind)

	const display = y.to(py => (py < height ? "block" : "none"))

	if (!isOpen) {
		return null
	}

	return (
		<Portal>
			<div className={classNamesHelp(styles.Drawer, {}, [className])}>
				<Overlay onClose={close} />

				<Spring.a.div
					className={styles.sheet}
					style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
					{...bind()}
				>
					<Card>{content}</Card>
				</Spring.a.div>
			</div>
		</Portal>
	)
}

const DrawerComponent = (props: DrawerProps) => {
	const { isLoading } = useAnimation()

	if (isLoading) {
		return null
	}

	return <DrawerContent {...props} />
}

export const Drawer = memo<DrawerProps>((props: DrawerProps) => {
	return (
		<AnimationProvider>
			<DrawerComponent {...props} />
		</AnimationProvider>
	)
})
