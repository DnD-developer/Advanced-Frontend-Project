import { EditableProfileCard } from "@features/EditableProfileCard"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import styles from "./ProfilePage.module.scss"

const ProfilePage = memo(() => {
	const { t } = useTranslation("profile")

	return (
		<div>
			<h1 className="page-header">{t("pageTitle")}</h1>
			<EditableProfileCard className={styles.profileCard} />
		</div>
	)
})

export default ProfilePage
