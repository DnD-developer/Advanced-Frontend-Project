import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { Input } from "@ui/Input"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import styles from "./LoginForm.module.scss"

type LoginFormProps = {
	classNames?: string
}
export const LoginForm: FC<LoginFormProps> = props => {
	const { classNames } = props

	const { t } = useTranslation()

	return (
		<form className={classNamesHelp(styles.LoginForm, {}, [classNames])}>
			<Input
				classNamesLabel={styles.label}
				label={t("translation:userName")}
				autoFocus
			/>
			<Input
				classNamesLabel={styles.label}
				label={t("translation:password")}
			/>
			<Button
				type="submit"
				theme={ButtonTheme.OUTLINE}
				className={styles.submitBtn}
			>
				{t("translation:login")}
			</Button>
		</form>
	)
}
