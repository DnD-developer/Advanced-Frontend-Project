import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { Input } from "@ui/Input"
import { Text } from "@ui/Text"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getProfileDataSelector } from "../../store/selectors/getProfileData/getProfileData.selector"
import styles from "./ProfileCard.module.scss"

type ProfileCardProps = {
	classNames?: string
}
export const ProfileCard: FC<ProfileCardProps> = props => {
	const { classNames } = props
	const { t } = useTranslation()

	const profileData = useSelector(getProfileDataSelector)
	return (
		<div className={classNamesHelp(styles.ProfileCard, {}, [classNames])}>
			<div className={styles.header}>
				<Text title={t("profile:privateData")} />
				<Button theme={ButtonTheme.OUTLINE}>{t("profile:edit")}</Button>
			</div>

			<Input
				value={profileData?.firstName || ""}
				label={t("profile:yourName")}
				classNamesLabel={styles.input}
			/>
			<Input
				value={profileData?.lastName || ""}
				classNamesLabel={styles.input}
				label={t("profile:yourLastName")}
			/>
		</div>
	)
}
