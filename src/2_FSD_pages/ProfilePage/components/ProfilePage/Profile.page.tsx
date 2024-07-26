import { profileDataType } from "@entities/Profile"
import { EditableProfileCard } from "@features/EditableProfileCard"
import { Page } from "@widgets/Page"
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
			<Page>
				<h1 className="page-header">{t("pageTitle")}</h1>
				<EditableProfileCard
					className={styles.profileCard}
					id={id}
				/>
			</Page>
		)
	}

	if (idTest) {
		return (
			<Page>
				<h1 className="page-header">{t("pageTitle")}</h1>
				<EditableProfileCard
					className={styles.profileCard}
					id={idTest}
				/>
			</Page>
		)
	}

	return null
})

export default ProfilePage
