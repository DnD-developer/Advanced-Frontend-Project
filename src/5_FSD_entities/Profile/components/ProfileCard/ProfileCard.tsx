import { classNamesHelp, Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { Avatar } from "@ui/Avatar"
import { Input } from "@ui/Input"
import { Loader } from "@ui/Loader"
import { Text, TextAlign, TextSize, TextTheme } from "@ui/Text"
import { memo, ReactNode, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { profileDataType } from "../../models/store/storeTypes/profileData.type"
import { profileStateMap } from "../../models/store/storeTypes/profileState.map"
import styles from "./ProfileCard.module.scss"

type ProfileCardCustomProps = {
	classNames?: string
	isLoading?: boolean
	readOnly?: boolean
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
		error,
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

	const modsOpacityZero = useMemo<Mods>(() => {
		return { [styles.opacityZero]: error || isLoading ? true : false }
	}, [error, isLoading])

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

			{error ?
				<div className={styles.container}>
					<Text
						size={TextSize.BIG}
						align={TextAlign.CENTER}
						title={t("profile:errorDataProfileCard")}
						text={t("profile:errorWithLoadData")}
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
						label={t("profile:yourAvatar")}
						classNamesLabel={classNamesHelp(styles.input, modsOpacityZero)}
						onChange={onChangeAvatar}
						readOnly={readOnly}
					/>
				}
			</div>

			<Input
				value={data?.userName || ""}
				label={t("profile:yourUserName")}
				classNamesLabel={classNamesHelp(styles.input, modsOpacityZero)}
				onChange={onChangeUserName}
				readOnly={readOnly}
			/>
			<Input
				value={data?.firstName || ""}
				label={t("profile:yourName")}
				classNamesLabel={classNamesHelp(styles.input, modsOpacityZero)}
				onChange={onChangeFirstName}
				readOnly={readOnly}
			/>
			<Input
				value={data?.lastName || ""}
				classNamesLabel={classNamesHelp(styles.input, modsOpacityZero)}
				label={t("profile:yourLastName")}
				onChange={onChangeLastName}
				readOnly={readOnly}
			/>
			<Input
				value={data?.age || ""}
				classNamesLabel={classNamesHelp(styles.input, modsOpacityZero)}
				label={t("profile:yourAge")}
				onChange={onChangeAge}
				readOnly={readOnly}
			/>
			<Input
				value={data?.city || ""}
				classNamesLabel={classNamesHelp(styles.input, modsOpacityZero)}
				label={t("profile:yourCity")}
				onChange={onChangeCity}
				readOnly={readOnly}
			/>
			<div className={classNamesHelp(styles.selects, modsOpacityZero)}>
				{selectCurrency}
				<div className={styles.selectCountry}>{selectCountry}</div>
			</div>
		</div>
	)
})
