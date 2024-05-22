import { EditableProfileCard } from "@features/EditableProfileCard"
import { type FC } from "react"
import { useTranslation } from "react-i18next"
import styles from "./ProfilePage.module.scss"

const ProfilePage: FC = () => {
	const { t } = useTranslation("profile")

	return (
		<div>
			<h1 className="page-header">{t("pageTitle")}</h1>
			<EditableProfileCard className={styles.profileCard} />
		</div>
	)
}

export default ProfilePage
