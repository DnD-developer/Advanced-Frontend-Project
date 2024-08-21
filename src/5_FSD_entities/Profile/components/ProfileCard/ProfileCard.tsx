import { classNamesHelp, Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { Avatar } from "@ui/Avatar"
import { Input } from "@ui/Input"
import { Loader } from "@ui/Loader"
import { HStack, VStack } from "@ui/Stack"
import { Text, TextAlign, TextSize, TextTheme } from "@ui/Text"
import { memo, ReactNode, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { mappingErrors } from "../../lib/helpers/mappingErrors/mappingErrors"
import {
	profileStateMap,
	ServerErrors,
	ValidateErrors
} from "../../store/storeTypes/profileState.map"
import { profileCardDatatype, profileDataType } from "../../types/profileData.type"
import styles from "./ProfileCard.module.scss"

type ProfileCardCustomProps = {
	classNames?: string
	isLoading?: boolean
	editAllow?: boolean
	data?: profileCardDatatype
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
	onChangeAge?: (value: string | number) => void
	onChangeCity?: (value: profileDataType["city"]) => void
}

type ProfileCardProps = ProfileCardCustomProps & Omit<profileStateMap, keyof ProfileCardCustomProps>

export const ProfileCard = memo<ProfileCardProps>(props => {
	const {
		classNames,
		editButton,
		editAllow = true,
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
			{isLoading ?
				<VStack
					align={"center"}
					justify={"center"}
					className={styles.container}
				>
					<Loader />
				</VStack>
			:	null}

			{isServerErrors ?
				<VStack
					justify={"center"}
					align={"center"}
					gap={"gap24"}
					className={styles.container}
				>
					<Text
						size={TextSize.BIG}
						align={TextAlign.CENTER}
						title={t(ServerErrors.SERVER_NOT_FOUND)}
						text={t("profile:errorServerText")}
						theme={TextTheme.ERROR}
					/>

					{reloadButton}
				</VStack>
			:	null}
			<VStack gap={"gap16"}>
				<HStack
					align={"center"}
					justify={"spaceBetween"}
				>
					<Text title={t("profile:privateData")} />
					{editAllow ?
						readOnly ?
							editButton
						:	<HStack
								gap={"gap12"}
								widthMax={false}
							>
								{cancelButton}
								{saveButton}
							</HStack>

					:	null}
				</HStack>

				<HStack
					align={"center"}
					justify={"center"}
					className={classNamesHelp("", modsOpacityZero)}
				>
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
							classNamesLabel={classNamesHelp("", modsOpacityZero)}
							onChange={onChangeAvatar}
							readOnly={readOnly}
							error={validateErrors.AVATAR_ERROR}
						/>
					}
				</HStack>
				<VStack gap={"gap16"}>
					<VStack gap={"gap16"}>
						<Input
							value={data?.userName || ""}
							label={
								validateErrors.USERNAME_ERROR ?
									t(ValidateErrors.USERNAME_ERROR)
								:	t("profile:yourUserName")
							}
							classNamesLabel={classNamesHelp("", modsOpacityZero)}
							onChange={onChangeUserName}
							readOnly={readOnly}
							error={validateErrors.USERNAME_ERROR}
						/>
						<Input
							value={data?.firstName || ""}
							label={
								validateErrors.FIRST_NAME ?
									t(ValidateErrors.FIRST_NAME)
								:	t("profile:yourName")
							}
							classNamesLabel={classNamesHelp("", modsOpacityZero)}
							onChange={onChangeFirstName}
							readOnly={readOnly}
							error={validateErrors.FIRST_NAME}
						/>
						<Input
							value={data?.lastName || ""}
							classNamesLabel={classNamesHelp("", modsOpacityZero)}
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
							classNamesLabel={classNamesHelp("", modsOpacityZero)}
							label={
								validateErrors.AGE_ERROR ?
									t(ValidateErrors.AGE_ERROR)
								:	t("profile:yourAge")
							}
							onChange={onChangeAge}
							readOnly={readOnly}
							error={validateErrors.AGE_ERROR}
						/>
						<Input
							value={data?.city || ""}
							classNamesLabel={classNamesHelp("", modsOpacityZero)}
							label={
								validateErrors.CITY_ERROR ?
									t(ValidateErrors.CITY_ERROR)
								:	t("profile:yourCity")
							}
							onChange={onChangeCity}
							readOnly={readOnly}
							error={validateErrors.CITY_ERROR}
						/>
					</VStack>

					<HStack
						gap={"gap12"}
						className={classNamesHelp("", modsOpacityZero)}
					>
						{selectCurrency}
						{selectCountry}
					</HStack>
				</VStack>
			</VStack>
		</div>
	)
})
