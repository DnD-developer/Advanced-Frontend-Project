import { routesPath } from "@shared/config/pagesPathsNames"
import { ClassNames } from "@shared/helpers/ClassNames"
import { AppLink, AppLinkTheme } from "@shared/ui/AppLink"
import { FC } from "react"
import styles from "./Header.module.scss"

interface HeaderProps {
	classNames?: string
}
export const Header: FC<HeaderProps> = props => {
	const { classNames } = props

	return (
		<ul className={ClassNames(styles.Header, {}, [classNames])}>
			{Object.entries(routesPath).map(([name, path]) => (
				<li
					key={path}
					className={styles.link}>
					<AppLink
						name={name}
						to={path}
						theme={AppLinkTheme.INVERTED}
					/>
				</li>
			))}
		</ul>
	)
}