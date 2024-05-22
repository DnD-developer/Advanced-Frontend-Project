import { memo, type PropsWithChildren } from "react"
import styles from "./Hello.module.scss"

export const Hello = memo<PropsWithChildren>(({ children }) => (
	<p className={styles.testClass}>{children}</p>
))
