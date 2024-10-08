import { SwitchThemeIcon } from "@assets/index"
import { useTheme } from "@sharedProviders/ThemeProvider/lib/hooks/useTheme"
import { Button, ButtonTheme } from "@ui/Button"
import { memo } from "react"
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
