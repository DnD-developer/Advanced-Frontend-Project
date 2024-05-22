import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { Button, ButtonTheme } from "@ui/Button"
import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { postProfileDataThunk } from "../../models/store/thunks/postProfileData/postProfileData.thunk"
import styles from "./SaveButton.module.scss"

type SaveButtonProps = {
	classNames?: string
}
export const SaveButton = memo<SaveButtonProps>(props => {
	const { classNames } = props
	const { t } = useTranslation()

	const dispatch = useAppDispatch()

	const onSaveHandler = useCallback(() => {
		dispatch(postProfileDataThunk())
	}, [dispatch])

	return (
		<Button
			theme={ButtonTheme.OUTLINE}
			className={classNamesHelp(styles.SaveButton, {}, [classNames])}
			onClick={onSaveHandler}
		>
			{t("translation:save")}
		</Button>
	)
})
