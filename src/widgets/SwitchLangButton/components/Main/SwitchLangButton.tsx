import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { type FC } from "react"
import { useTranslation } from "react-i18next"
import styles from "./SwitchLangButton.module.scss"

type SwitchLangButtonProps = {
	classNames?: string
}

export const SwitchLangButton: FC<SwitchLangButtonProps> = props => {
	const { classNames } = props
	const {
		t,
		i18n: { changeLanguage, language }
	} = useTranslation()

	const switchLanguageHandler = async (): Promise<void> => {
		await changeLanguage(language === "ru" ? "en" : "ru")
	}

	return (
		<Button
			onClick={switchLanguageHandler}
			className={classNamesHelp(styles.SwitchLangButton, {}, [classNames])}
			theme={ButtonTheme.CLEAR}
		>
			{t("translation:lang")}
		</Button>
	)
}
