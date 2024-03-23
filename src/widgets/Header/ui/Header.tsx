import { Link } from "react-router-dom"
import styles from "./Header.module.scss"

export const Header = () => (
	<>
		<ul className={styles.linksList}>
			<li className={styles.link}>
				<Link to="/">Main</Link>
			</li>

			<li className={styles.link}>
				<Link to="/about">About</Link>
			</li>
		</ul>
	</>
)