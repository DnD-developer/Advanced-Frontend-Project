import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Avatar } from "@ui/Avatar"
import { Input } from "@ui/Input"
import { Loader } from "@ui/Loader"
import { HStack, VStack } from "@ui/Stack"
import { Text, TextAlign, TextSize, TextTheme } from "@ui/Text"
import type { ReactNode } from "react"
import { memo, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { ServerErrors } from "../../constants/ServerErrors.constant"
import { ValidateErrorsConstant } from "../../constants/ValidateErrors.constant"
import { mappingErrors } from "../../lib/helpers/mappingErrors/mappingErrors"
import type { profileStateMap } from "../../store/storeTypes/profileState.map"
import type { profileCardDataType, profileDataType } from "../../types/profileData.type"
import styles from "./ProfileCard.module.scss"
import type { testingProps } from "@customTypes/testing.types"

type ProfileCardCustomProps = {
	classNames?: string
	isLoading?: boolean
	editAllow?: boolean
	data?: profileCardDataType
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

type ProfileCardProps = ProfileCardCustomProps &
	Omit<profileStateMap, keyof ProfileCardCustomProps> &
	testingProps

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
		"data-testid": dataTestId,
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
		return { [styles.writable]: !readOnly }
	}, [readOnly])

	return (
		<div
			className={classNamesHelp(styles.ProfileCard, modsReadOnly, [classNames])}
			data-testid={`${dataTestId}.ProfileCard`}
		>
			{isLoading ?
				<VStack
					align={"center"}
					justify={"center"}
					className={styles.container}
					data-testid={`${dataTestId}.Loader`}
				>
					<Loader />
				</VStack>
			:	null}

			{isServerErrors ?
				<VStack
					justify={"center"}
					align={"center"}
					gap={"gap16"}
					className={styles.container}
					data-testid={`${dataTestId}.ServerError`}
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
							data-testid={`${dataTestId}.AvatarCard`}
						/>
					:	<Input
							data-testid={`${dataTestId}.AvatarInput`}
							value={data?.avatar || ""}
							label={
								validateErrors.AVATAR_ERROR ?
									t(ValidateErrorsConstant.AVATAR_ERROR)
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
							data-testid={`${dataTestId}.UserNameInput`}
							value={data?.userName || ""}
							label={
								validateErrors.USERNAME_ERROR ?
									t(ValidateErrorsConstant.USERNAME_ERROR)
								:	t("profile:yourUserName")
							}
							classNamesLabel={classNamesHelp("", modsOpacityZero)}
							onChange={onChangeUserName}
							readOnly={readOnly}
							error={validateErrors.USERNAME_ERROR}
						/>
						<Input
							value={data?.firstName || ""}
							data-testid={`${dataTestId}.FirstNameInput`}
							label={
								validateErrors.FIRST_NAME ?
									t(ValidateErrorsConstant.FIRST_NAME)
								:	t("profile:yourName")
							}
							classNamesLabel={classNamesHelp("", modsOpacityZero)}
							onChange={onChangeFirstName}
							readOnly={readOnly}
							error={validateErrors.FIRST_NAME}
						/>
						<Input
							value={data?.lastName || ""}
							data-testid={`${dataTestId}.LastNameInput`}
							classNamesLabel={classNamesHelp("", modsOpacityZero)}
							label={
								validateErrors.LAST_NAME ?
									t(ValidateErrorsConstant.LAST_NAME)
								:	t("profile:yourLastName")
							}
							onChange={onChangeLastName}
							readOnly={readOnly}
							error={validateErrors.LAST_NAME}
						/>
						<Input
							data-testid={`${dataTestId}.AgeInput`}
							value={data?.age || ""}
							classNamesLabel={classNamesHelp("", modsOpacityZero)}
							label={
								validateErrors.AGE_ERROR ?
									t(ValidateErrorsConstant.AGE_ERROR)
								:	t("profile:yourAge")
							}
							onChange={onChangeAge}
							readOnly={readOnly}
							error={validateErrors.AGE_ERROR}
						/>
						<Input
							data-testid={`${dataTestId}.CityInput`}
							value={data?.city || ""}
							classNamesLabel={classNamesHelp("", modsOpacityZero)}
							label={
								validateErrors.CITY_ERROR ?
									t(ValidateErrorsConstant.CITY_ERROR)
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
