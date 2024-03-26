import { ClassNames } from "@lib/helpers/ClassNames"
import { Button } from "@ui/Button"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import styles from "./SwitchLangButton.module.scss"

interface SwitchLangButtonProps {
	classNames?: string
}

export const SwitchLangButton: FC<SwitchLangButtonProps> = props => {
	const { classNames } = props
	const { t, i18n } = useTranslation()

	const switchLanguageHandler = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru").then(() => {})
	}

	return (
		<Button
			onClick={switchLanguageHandler}
			className={ClassNames(styles.SwitchLangButton, {}, [classNames])}>
			{t("lang")}
		</Button>
	)
}