import { profileDataType } from "@entities/Profile"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { Button, ButtonTheme } from "@ui/Button"
import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { postProfileDataThunk } from "../../store/thunks/postProfileData/postProfileData.thunk"
import styles from "./SaveButton.module.scss"

type SaveButtonProps = {
	classNames?: string
	id: profileDataType["id"]
}
export const SaveButton = memo<SaveButtonProps>(props => {
	const { classNames, id } = props
	const { t } = useTranslation("profile")

	const dispatch = useAppDispatch()

	const onSaveHandler = useCallback(() => {
		dispatch(postProfileDataThunk(id))
	}, [dispatch, id])

	return (
		<Button
			theme={ButtonTheme.OUTLINE}
			className={classNamesHelp(styles.SaveButton, {}, [classNames])}
			onClick={onSaveHandler}
		>
			{t("profile:save")}
		</Button>
	)
})
