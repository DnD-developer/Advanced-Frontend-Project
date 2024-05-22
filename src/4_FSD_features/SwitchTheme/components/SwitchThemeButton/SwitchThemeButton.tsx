import SwitchThemeIcon from "@assets/icons/switch-theme-icon.svg"
import { Button, ButtonTheme } from "@ui/Button"
import { memo } from "react"
import { useTheme } from "../../hooks/useTheme"
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
