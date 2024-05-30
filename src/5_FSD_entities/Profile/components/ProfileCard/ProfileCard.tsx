import { classNamesHelp, Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { Avatar } from "@ui/Avatar"
import { Input } from "@ui/Input"
import { Loader } from "@ui/Loader"
import { Text, TextAlign, TextSize, TextTheme } from "@ui/Text"
import { memo, ReactNode, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { mappingErrors } from "../../models/services/mappingErrors/mappingErrors"
import {
	profileStateMap,
	ServerErrors,
	ValidateErrors
} from "../../models/store/storeTypes/profileState.map"
import { profileDataType } from "../../models/types/profileData.type"
import styles from "./ProfileCard.module.scss"

type ProfileCardCustomProps = {
	classNames?: string
	isLoading?: boolean
	readOnly?: boolean
	labelError?: string
	editButton?: ReactNode
	saveButton?: ReactNode
	cancelButton?: ReactNode
	reloadButton?: ReactNode
	selectCurrency?: ReactNode
	selectCountry?: ReactNode
	onChangeUserName?: (value: profileDataType["userName"]) => void
	onChangeAvatar?: (value: profileDataType["avatar"]) => void
	onChangeFirstName?: (value: profileDataType["firstName"]) => void
	onChangeLastName?: (value: profileDataType["lastName"]) => void
	onChangeAge?: (value: string) => void
	onChangeCity?: (value: profileDataType["city"]) => void
}

type ProfileCardProps = ProfileCardCustomProps & Omit<profileStateMap, keyof ProfileCardCustomProps>

export const ProfileCard = memo<ProfileCardProps>(props => {
	const {
		classNames,
		editButton,
		saveButton,
		reloadButton,
		cancelButton,
		selectCountry,
		selectCurrency,
		data,
		errors,
		isLoading,
		readOnly,
		onChangeUserName,
		onChangeAvatar,
		onChangeFirstName,
		onChangeLastName,
		onChangeCity,
		onChangeAge
	} = props

	const { t } = useTranslation("profile")

	const { validateErrors, isServerErrors } = useMemo(() => mappingErrors(errors), [errors])

	const modsOpacityZero = useMemo<Mods>(() => {
		return { [styles.opacityZero]: isServerErrors || isLoading ? true : false }
	}, [isServerErrors, isLoading])

	const modsReadOnly = useMemo<Mods>(() => {
		return { [styles.readOny]: !readOnly }
	}, [readOnly])

	return (
		<div className={classNamesHelp(styles.ProfileCard, modsReadOnly, [classNames])}>
			<div className={styles.header}>
				<Text title={t("profile:privateData")} />
				{readOnly ?
					editButton
				:	<div className={styles.btnContainer}>
						{cancelButton}
						<div className={styles.save}>{saveButton}</div>
					</div>
				}
			</div>

			{isLoading ?
				<div className={styles.container}>
					<Loader />
				</div>
			:	null}

			{isServerErrors ?
				<div className={styles.container}>
					<Text
						size={TextSize.BIG}
						align={TextAlign.CENTER}
						title={t(ServerErrors.SERVER_NOT_FOUND)}
						text={t("profile:errorServerText")}
						theme={TextTheme.ERROR}
					/>

					<div className={styles.reload}>{reloadButton}</div>
				</div>
			:	null}

			<div className={classNamesHelp(styles.avatar, modsOpacityZero)}>
				{readOnly ?
					<Avatar
						src={data?.avatar || ""}
						alt={t("translation:avatar")}
					/>
				:	<Input
						value={data?.avatar || ""}
						label={
							validateErrors.AVATAR_ERROR ?
								t(ValidateErrors.AVATAR_ERROR)
							:	t("profile:yourAvatar")
						}
						classNamesLabel={classNamesHelp(styles.input, modsOpacityZero)}
						onChange={onChangeAvatar}
						readOnly={readOnly}
						error={validateErrors.AVATAR_ERROR}
					/>
				}
			</div>

			<Input
				value={data?.userName || ""}
				label={
					validateErrors.USERNAME_ERROR ?
						t(ValidateErrors.USERNAME_ERROR)
					:	t("profile:yourUserName")
				}
				classNamesLabel={classNamesHelp(styles.input, modsOpacityZero)}
				onChange={onChangeUserName}
				readOnly={readOnly}
				error={validateErrors.USERNAME_ERROR}
			/>
			<Input
				value={data?.firstName || ""}
				label={
					validateErrors.FIRST_NAME ? t(ValidateErrors.FIRST_NAME) : t("profile:yourName")
				}
				classNamesLabel={classNamesHelp(styles.input, modsOpacityZero)}
				onChange={onChangeFirstName}
				readOnly={readOnly}
				error={validateErrors.FIRST_NAME}
			/>
			<Input
				value={data?.lastName || ""}
				classNamesLabel={classNamesHelp(styles.input, modsOpacityZero)}
				label={
					validateErrors.LAST_NAME ?
						t(ValidateErrors.LAST_NAME)
					:	t("profile:yourLastName")
				}
				onChange={onChangeLastName}
				readOnly={readOnly}
				error={validateErrors.LAST_NAME}
			/>
			<Input
				value={data?.age || ""}
				classNamesLabel={classNamesHelp(styles.input, modsOpacityZero)}
				label={
					validateErrors.AGE_ERROR ? t(ValidateErrors.AGE_ERROR) : t("profile:yourAge")
				}
				onChange={onChangeAge}
				readOnly={readOnly}
				error={validateErrors.AGE_ERROR}
			/>
			<Input
				value={data?.city || ""}
				classNamesLabel={classNamesHelp(styles.input, modsOpacityZero)}
				label={
					validateErrors.CITY_ERROR ? t(ValidateErrors.CITY_ERROR) : t("profile:yourCity")
				}
				onChange={onChangeCity}
				readOnly={readOnly}
				error={validateErrors.CITY_ERROR}
			/>
			<div className={classNamesHelp(styles.selects, modsOpacityZero)}>
				{selectCurrency}
				<div className={styles.selectCountry}>{selectCountry}</div>
			</div>
		</div>
	)
})
