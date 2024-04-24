import { useTheme } from "@app/providers/ThemeContext"
import SwitchThemeIcon from "@assets/icons/switch-theme-icon.svg"
import { Button, ButtonTheme } from "@ui//Button"
import { type FC } from "react"
import styles from "./SwitchThemeButton.module.scss"

export const SwitchThemeButton: FC = () => {
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
}
