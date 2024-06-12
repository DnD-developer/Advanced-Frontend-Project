import { SwitchThemeIcon } from "@assets/index"
import { Button, ButtonTheme } from "@ui/Button"
import { memo } from "react"
import { useTheme } from "../../lib/hooks/useTheme"
import styles from "./SwitchThemeButton.module.scss"

export const SwitchThemeButton = memo(() => {
	const { switchTheme } = useTheme()

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			onClick={switchTheme}
			className={styles.SwitchThemeButton}
		>
			<SwitchThemeIcon />
		</Button>
	)
})
