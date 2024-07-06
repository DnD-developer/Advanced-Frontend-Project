import { profileDataType } from "@entities/Profile"
import { EditableProfileCard } from "@features/EditableProfileCard"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router"
import styles from "./ProfilePage.module.scss"

export type profilePageProps = {
	idTest?: profileDataType["id"]
}

const ProfilePage = memo((props: profilePageProps) => {
	const { idTest } = props

	const { t } = useTranslation("profile")

	const { id } = useParams<{ id: profileDataType["id"] }>()

	if (id) {
		return (
			<div>
				<h1 className="page-header">{t("pageTitle")}</h1>
				<EditableProfileCard
					className={styles.profileCard}
					id={id}
				/>
			</div>
		)
	}

	if (idTest) {
		return (
			<div>
				<h1 className="page-header">{t("pageTitle")}</h1>
				<EditableProfileCard
					className={styles.profileCard}
					id={idTest}
				/>
			</div>
		)
	}

	return null
})

export default ProfilePage
