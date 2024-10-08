import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import styles from "./SwitchLangButton.module.scss"

type SwitchLangButtonProps = {
	classNames?: string
}

export const SwitchLangButton = memo<SwitchLangButtonProps>(props => {
	const { classNames } = props
	const {
		t,
		i18n: { changeLanguage, language }
	} = useTranslation()

	const switchLanguageHandler = useCallback(async () => {
		await changeLanguage(language.includes("ru") ? "en" : "ru")
	}, [changeLanguage, language])

	return (
		<Button
			onClick={switchLanguageHandler}
			className={classNamesHelp(styles.SwitchLangButton, {}, [classNames])}
			theme={ButtonTheme.CLEAR}
		>
			{t("translation:lang")}
		</Button>
	)
})
