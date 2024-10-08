import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { Button, ButtonTheme } from "@ui/Button"
import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { editableProfileActions } from "../../store/slices/editableProfileCard.slice"
import styles from "./CancelButton.module.scss"

type CancelButtonProps = {
	classNames?: string
}
export const CancelButton = memo<CancelButtonProps>(props => {
	const { classNames } = props
	const { t } = useTranslation("profile")

	const { resetForm } = editableProfileActions
	const dispatch = useAppDispatch()

	const onResetFormHandler = useCallback(() => {
		dispatch(resetForm())
	}, [dispatch, resetForm])

	return (
		<Button
			data-testid={"EditableProfileCard.CancelButton"}
			theme={ButtonTheme.OUTLINE}
			className={classNamesHelp(styles.CancelButton, {}, [classNames])}
			onClick={onResetFormHandler}
			error={true}
		>
			{t("profile:cancel")}
		</Button>
	)
})
