import styles from "./SwitchThemeButton.module.scss"

type SwithThemeButtonProps = {
	onClick: () => void
}

export const SwithThemeButton = ({ onClick }: SwithThemeButtonProps) => {
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