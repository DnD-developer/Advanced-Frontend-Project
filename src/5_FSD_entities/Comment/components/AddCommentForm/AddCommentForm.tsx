import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { Input } from "@ui/Input"
import { InputTheme } from "@ui/Input/constants/Input.constant"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { addCommentFormStateMap } from "../../store/storeTypes/addCommentFormState.map"
import styles from "./AddCommentForm.module.scss"

type AddCommentFormProps = {
	className?: string
	onSendHandler: () => void
	onSetTextHandler: (value: string) => void
} & addCommentFormStateMap

export const AddCommentForm = memo<AddCommentFormProps>(props => {
	const {
		className,
		onSendHandler,
		onSetTextHandler,
		isLoading = false,
		text = "",
		error = undefined
	} = props

	const { t } = useTranslation()

	return (
		<div className={classNamesHelp(styles.AddCommentForm, {}, [className])}>
			<Input
				onChange={onSetTextHandler}
				label={error ? error : ""}
				error={error ? true : false}
				placeholder={t("translation:inputTextOfComment")}
				theme={InputTheme.CLEAR}
				value={text}
				disabled={isLoading}
			/>
			<Button
				onClick={onSendHandler}
				disabled={isLoading}
				theme={ButtonTheme.OUTLINE}
				className={styles.button}
			>
				{t("translation:send")}
			</Button>
		</div>
	)
})
