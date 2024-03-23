import { routesPath } from "@shared/config/pagesPathsNames"
import { Link } from "react-router-dom"
import styles from "./Header.module.scss"

export const Header = () => (
	<>
		<ul className={styles.linksList}>
			{Object.entries(routesPath).map(([name, path]) => (
				<li
					key={path}
					className={styles.link}>
					<Link to={path}>{name}</Link>
				</li>
			))}
		</ul>
	</>
)