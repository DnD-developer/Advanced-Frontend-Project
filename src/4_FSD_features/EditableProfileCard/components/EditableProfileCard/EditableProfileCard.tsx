import { CountrySelect } from "@entities/Country"
import { CurrencySelect } from "@entities/Currency"
import { fetchProfileDataThunk, ProfileCard, profileDataType } from "@entities/Profile"
import { useAuth } from "@entities/User"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { memo, useCallback, useEffect, useMemo } from "react"
import { useSelector } from "react-redux"
import { getEditableProfileCardErrorSelector } from "../../store/selectors/getEditableProfileCardError/getEditableProfileCardError.selector"
import { getEditableProfileCardFormDataSelector } from "../../store/selectors/getEditableProfileCardFormData/getEditableProfileCardFormData.selector"
import { getEditableProfileCardIsLoadingSelector } from "../../store/selectors/getEditableProfileCardIsLoading/getEditableProfileCardIsLoading.selector"
import { getEditableProfileCardReadOnlySelector } from "../../store/selectors/getEditableProfileCardReadOnly/geEditableProfileCardReadOnly.selector"
import {
	editableProfileActions,
	editableProfileCardReducer
} from "../../store/slices/editableProfileCard.slice"
import { CancelButton } from "../CancelButton/CancelButton"
import { EditButton } from "../EditButton/EditButton"
import { ReFetchButton } from "../ReFetchButton/ReFetchButton"
import { SaveButton } from "../SaveButton/SaveButton"

type EditableProfileCardProps = {
	className?: string
	id: profileDataType["id"]
}

const initialReducers: asyncReducersList = {
	editableProfileCard: editableProfileCardReducer
}

export const EditableProfileCard = memo<EditableProfileCardProps>(props => {
	const { className, id } = props

	useAsyncReducer(initialReducers)

	const { authData } = useAuth()

	const formData = useSelector(getEditableProfileCardFormDataSelector)
	const isLoading = useSelector(getEditableProfileCardIsLoadingSelector)
	const errors = useSelector(getEditableProfileCardErrorSelector)
	const readOnly = useSelector(getEditableProfileCardReadOnlySelector)

	const dispatch = useAppDispatch()

	useEffect(() => {
		if (__PROJECT__ !== "storybook") {
			dispatch(fetchProfileDataThunk(id))
		}
	}, [dispatch, id])

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
		(value: string | number) => {
			if (!/\D/.test(value as string)) {
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

	const editButton = useMemo(() => <EditButton />, [])
	const saveButton = useMemo(() => <SaveButton id={id} />, [id])
	const cancelButton = useMemo(() => <CancelButton />, [])
	const reloadButton = useMemo(() => <ReFetchButton id={id} />, [id])
	const selectCurrency = useMemo(
		() => (
			<CurrencySelect
				onChange={onChangeCurrencyHandler}
				disabled={readOnly}
				value={formData?.currency}
			/>
		),
		[formData?.currency, onChangeCurrencyHandler, readOnly]
	)
	const selectCountry = useMemo(
		() => (
			<CountrySelect
				onChange={onChangeCountryHandler}
				disabled={readOnly}
				value={formData?.country}
			/>
		),
		[formData?.country, onChangeCountryHandler, readOnly]
	)
	return (
		<ProfileCard
			classNames={className}
			editButton={editButton}
			saveButton={saveButton}
			cancelButton={cancelButton}
			reloadButton={reloadButton}
			selectCurrency={selectCurrency}
			selectCountry={selectCountry}
			isLoading={isLoading}
			editAllow={authData?.id === id}
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
