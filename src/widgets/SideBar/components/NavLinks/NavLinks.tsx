import { routesPath } from "@config/pagesPathsNames"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { FC, HTMLAttributes } from "react"
import styles from "./NavLinks.module.scss"
import { AppLinkWithIcon } from "./ui/AppLinkWithIcon/AppLinkWithIcon"

type NavLinksProps = {
	classNames?: string
	collapsed: boolean
} & HTMLAttributes<HTMLUListElement>

export const NavLinks: FC<NavLinksProps> = props => {
	const { classNames, collapsed } = props

	return (
		<ul className={classNamesHelp(styles.linkList, {}, [classNames])}>
			{routesPath
				.filter(({ inHeader }) => inHeader)
				.map(({ name, path, Icon }) => (
					<li
						key={path}
						className={styles.linkItem}
					>
						<AppLinkWithIcon
							to={path}
							inverted={true}
							collapsed={collapsed}
							Icon={Icon}
							name={name}
						/>
					</li>
				))}
		</ul>
	)
}
