import { fetchProfileDataThunk, ProfileCard, profileReducer } from "@entities/Profile"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { type FC, useEffect } from "react"
import { useTranslation } from "react-i18next"
import styles from "./ProfilePage.module.scss"

const initialReducers: asyncReducersList = {
	profile: profileReducer
}

const ProfilePage: FC = () => {
	const { t } = useTranslation("profile")

	useAsyncReducer(initialReducers)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchProfileDataThunk())
	}, [dispatch])

	return (
		<div>
			<h1 className="page-header">{t("pageTitle")}</h1>
			<ProfileCard classNames={styles.profileCard} />
		</div>
	)
}

export default ProfilePage
