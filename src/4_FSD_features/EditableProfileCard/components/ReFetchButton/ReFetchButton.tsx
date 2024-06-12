import { fetchProfileDataThunk } from "@entities/Profile"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { Button, ButtonTheme } from "@ui/Button"
import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import styles from "./ReFetchButton.module.scss"

type ReFetchButtonProps = {
	classNames?: string
}
export const ReFetchButton = memo<ReFetchButtonProps>(props => {
	const { classNames } = props

	const { t } = useTranslation("profile")
	const dispatch = useAppDispatch()

	const onReFetchHandler = useCallback(() => {
		dispatch(fetchProfileDataThunk())
	}, [dispatch])

	return (
		<Button
			className={classNamesHelp(styles.ReFetchButton, {}, [classNames])}
			onClick={onReFetchHandler}
			theme={ButtonTheme.OUTLINE}
			error
		>
			{t("profile:reload")}
		</Button>
	)
})
