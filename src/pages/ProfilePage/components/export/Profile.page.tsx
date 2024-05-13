import { profileReducer } from "@entities/Profile"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { type FC } from "react"
import { useTranslation } from "react-i18next"

const initialReducers: asyncReducersList = {
	profile: profileReducer
}

const ProfilePage: FC = () => {
	const { t } = useTranslation("profilePage")

	useAsyncReducer(initialReducers)

	return (
		<div>
			<h1 className="page-header">{t("pageTitle")}</h1>
		</div>
	)
}

export default ProfilePage
