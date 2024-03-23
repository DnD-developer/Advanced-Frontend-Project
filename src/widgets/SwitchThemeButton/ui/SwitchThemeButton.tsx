import styles from "./SwitchThemeButton.module.scss"

type SwitchThemeButtonProps = {
	onClick: () => void
}

export const SwitchThemeButton = ({ onClick }: SwitchThemeButtonProps) => {
	const onCliCkHandler = () => {
		onClick()
	}
	return (
		<button
			onClick={onCliCkHandler}
			className={styles.buttonSwitch}>
			Switch theme
		</button>
	)
}