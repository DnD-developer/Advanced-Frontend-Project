import { CountrySelect } from "@entities/Country"
import { CurrencySelect } from "@entities/Currency"
import { ProfileCard, profileDataType } from "@entities/Profile"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { memo, useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { getEditableProfileCardErrorSelector } from "../../models/store/selectors/getEditableProfileCardError/getEditableProfileCardError.selector"
import { getEditableProfileCardFormDataSelector } from "../../models/store/selectors/getEditableProfileCardFormData/getEditableProfileCardFormData.selector"
import { getEditableProfileCardIsLoadingSelector } from "../../models/store/selectors/getEditableProfileCardIsLoading/getProfileIsLoading.selector"
import { getEditableProfileCardReadOnlySelector } from "../../models/store/selectors/getEditableProfileCardReadOnly/getProfileReadOnly.selector"
import {
	editableProfileActions,
	editableProfileCardReducer
} from "../../models/store/slices/editableProfileCard.slice"
import { fetchProfileDataThunk } from "../../models/store/thunks/fetchProfileData/fetchProfileData.thunk"
import { CancelButton } from "../CancelButton/CancelButton"
import { EditButton } from "../EditButton/EditButton"
import { ReFetchButton } from "../ReFetchButton/ReFetchButton"
import { SaveButton } from "../SaveButton/SaveButton"

type EditableProfileCardProps = {
	className?: string
}

const initialReducers: asyncReducersList = {
	editableProfileCard: editableProfileCardReducer
}

export const EditableProfileCard = memo<EditableProfileCardProps>(props => {
	const { className } = props

	useAsyncReducer(initialReducers)

	const formData = useSelector(getEditableProfileCardFormDataSelector)
	const isLoading = useSelector(getEditableProfileCardIsLoadingSelector)
	const errors = useSelector(getEditableProfileCardErrorSelector)
	const readOnly = useSelector(getEditableProfileCardReadOnlySelector)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchProfileDataThunk())
	}, [dispatch])

	const { updateForm } = editableProfileActions

	const onChangeUserNameHandler = useCallback(
		(value: profileDataType["userName"]) => {
			dispatch(updateForm({ userName: value }))
		},
		[dispatch, updateForm]
	)

	const onChangeAvatarHandler = useCallback(
		(value: profileDataType["avatar"]) => {
			dispatch(updateForm({ avatar: value }))
		},
		[dispatch, updateForm]
	)

	const onChangeFirstNameHandler = useCallback(
		(value: profileDataType["firstName"]) => {
			dispatch(updateForm({ firstName: value }))
		},
		[dispatch, updateForm]
	)

	const onChangeLastNameHandler = useCallback(
		(value: profileDataType["lastName"]) => {
			dispatch(updateForm({ lastName: value }))
		},
		[dispatch, updateForm]
	)

	const onChangeAgeHandler = useCallback(
		(value: string) => {
			if (!/\D/.test(value)) {
				dispatch(updateForm({ age: Number(value) }))
			}
		},
		[dispatch, updateForm]
	)
	const onChangeCityHandler = useCallback(
		(value: profileDataType["city"]) => {
			dispatch(updateForm({ city: value }))
		},
		[dispatch, updateForm]
	)

	const onChangeCurrencyHandler = useCallback(
		(value: profileDataType["currency"]) => {
			dispatch(updateForm({ currency: value }))
		},
		[dispatch, updateForm]
	)

	const onChangeCountryHandler = useCallback(
		(value: profileDataType["country"]) => {
			dispatch(updateForm({ country: value }))
		},
		[dispatch, updateForm]
	)

	return (
		<ProfileCard
			classNames={className}
			editButton={<EditButton />}
			saveButton={<SaveButton />}
			cancelButton={<CancelButton />}
			reloadButton={<ReFetchButton />}
			selectCurrency={
				<CurrencySelect
					onChange={onChangeCurrencyHandler}
					disabled={readOnly}
					value={formData?.currency}
				/>
			}
			selectCountry={
				<CountrySelect
					onChange={onChangeCountryHandler}
					disabled={readOnly}
					value={formData?.country}
				/>
			}
			isLoading={isLoading}
			errors={errors}
			readOnly={readOnly}
			data={formData}
			onChangeUserName={onChangeUserNameHandler}
			onChangeAvatar={onChangeAvatarHandler}
			onChangeFirstName={onChangeFirstNameHandler}
			onChangeLastName={onChangeLastNameHandler}
			onChangeCity={onChangeCityHandler}
			onChangeAge={onChangeAgeHandler}
		/>
	)
})
