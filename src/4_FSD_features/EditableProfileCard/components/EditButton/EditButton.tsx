import { mappingErrors } from "@entities/Profile"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { Button, ButtonTheme } from "@ui/Button"
import { memo, useCallback, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getEditableProfileCardErrorSelector } from "../../models/store/selectors/getEditableProfileCardError/getEditableProfileCardError.selector"
import { getEditableProfileCardIsLoadingSelector } from "../../models/store/selectors/getEditableProfileCardIsLoading/getProfileIsLoading.selector"
import { editableProfileActions } from "../../models/store/slices/editableProfileCard.slice"
import styles from "./EditButton.module.scss"

type EditButtonProps = {
	classNames?: string
}
export const EditButton = memo<EditButtonProps>(props => {
	const { classNames } = props
	const { t } = useTranslation()

	const { setReadOnly } = editableProfileActions
	const dispatch = useAppDispatch()

	const errors = useSelector(getEditableProfileCardErrorSelector)
	const isLoading = useSelector(getEditableProfileCardIsLoadingSelector)

	const { isServerErrors } = useMemo(() => mappingErrors(errors), [errors])

	const setReadonlyHandler = useCallback(() => {
		dispatch(setReadOnly(false))
	}, [dispatch, setReadOnly])

	return (
		<Button
			className={classNamesHelp(styles.EditButton, {}, [classNames])}
			theme={ButtonTheme.OUTLINE}
			onClick={setReadonlyHandler}
			disabled={isServerErrors || isLoading ? true : false}
		>
			{t("translation:edit")}
		</Button>
	)
})
