import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { AnchorProps } from "@headlessui/react/dist/internal/floating"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Fragment, memo, ReactNode, useMemo } from "react"
import { uid } from "uid"
import styles from "./Dropdown.module.scss"

type dropDownItemType = {
	content: ReactNode
	onClick?: () => void
	href?: string
}

type DropdownProps = {
	className?: string
	triggerNode: ReactNode
	items: dropDownItemType[]
}
export const Dropdown = memo<DropdownProps>(props => {
	const { className, triggerNode, items } = props

	const itemsNode = items.map(itm => {
		return (
			<MenuItem
				key={uid()}
				as={Fragment}
			>
				{({ focus }) => {
					let Element = null

					if (itm.href) {
						Element = (
							<a
								href={itm.href}
								className={classNamesHelp(
									styles.item,
									{ [styles.active]: focus },
									[]
								)}
							>
								{itm.content}
							</a>
						)
					} else {
						Element = (
							<button
								onClick={itm.onClick}
								className={classNamesHelp(
									styles.item,
									{ [styles.active]: focus },
									[]
								)}
							>
								{itm.content}
							</button>
						)
					}
					return Element
				}}
			</MenuItem>
		)
	})

	const anchor: AnchorProps = useMemo(
		() => ({
			to: "bottom end",
			gap: 8
		}),
		[]
	)

	return (
		<Menu
			as={"div"}
			className={classNamesHelp(styles.Dropdown, {}, [className])}
		>
			<MenuButton
				role={"button"}
				tabIndex={0}
				as={"div"}
				className={styles.trigger}
			>
				{triggerNode}
			</MenuButton>
			<MenuItems
				anchor={anchor}
				className={styles.list}
			>
				{itemsNode}
			</MenuItems>
		</Menu>
	)
})
