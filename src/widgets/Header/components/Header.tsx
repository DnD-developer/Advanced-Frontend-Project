import { routesPath } from "@config/pagesPathsNames"
import { ClassNames } from "@lib/helpers/ClassNames"
import { AppLink, AppLinkTheme } from "@ui/AppLink"
import { FC, PropsWithChildren } from "react"
import styles from "./Header.module.scss"

interface HeaderProps extends PropsWithChildren {
	classNames?: string
}
export const Header: FC<HeaderProps> = props => {
	const { classNames, children } = props

	return (
		<div className={ClassNames(styles.Header, {}, [classNames])}>
			{children}
			<ul className={styles.linkList}>
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
		</div>
	)
}