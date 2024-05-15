import { fetchProfileDataThunk, ProfileCard, profileReducer } from "@entities/Profile"
import { getUserAuthDataSelector } from "@entities/User"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { type FC, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import styles from "./ProfilePage.module.scss"

const initialReducers: asyncReducersList = {
	profile: profileReducer
}

const ProfilePage: FC = () => {
	const { t } = useTranslation("profile")

	useAsyncReducer(initialReducers)

	const dispatch = useAppDispatch()
	const authData = useSelector(getUserAuthDataSelector)

	useEffect(() => {
		dispatch(fetchProfileDataThunk())
	}, [dispatch, authData])

	return (
		<div>
			<h1 className="page-header">{t("pageTitle")}</h1>
			<ProfileCard classNames={styles.profileCard} />
		</div>
	)
}

export default ProfilePage
