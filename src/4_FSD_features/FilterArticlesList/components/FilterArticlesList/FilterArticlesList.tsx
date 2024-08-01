import { sortOrder } from "@customTypes/productGlobal.types"
import { ArticleTypeConstant } from "@entities/Article/constants/Article.constant"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { useDebounce } from "@hooks/useDebounce.hook"
import { Input } from "@ui/Input"
import { InputTheme } from "@ui/Input/constants/Input.constant"
import { OptionType, Select } from "@ui/Select"
import { Tabs, TabsItem } from "@ui/Tabs"
import { memo, useCallback, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { ArticleSortFieldConstant } from "../../constants/ArticleSortField.constant"
import { getFilterArticlesListOrderSelector } from "../../store/selectors/getFilterArticlesListOrder/getFilterArticlesListOrder.selector"
import { getFilterArticlesListSearchSelector } from "../../store/selectors/getFilterArticlesListSearch/getFilterArticlesListSearch.selector"
import { getFilterArticlesListSortFieldSelector } from "../../store/selectors/getFilterArticlesListSortField/getFilterArticlesListSortField.selector"
import { getFilterArticlesListTypeTopicSelector } from "../../store/selectors/getFilterArticlesListTypeTopic/getFilterArticlesListTypeTopic.selector"
import {
	filterArticlesListActions,
	filterArticlesListReducer
} from "../../store/slices/filterArticlesList.slice"
import styles from "./FilterArticlesList.module.scss"

type FilterArticlesListProps = {
	className?: string
	callback: () => void
}

const initReducer: asyncReducersList = {
	filterArticlesList: filterArticlesListReducer
}

export const FilterArticlesList = memo<FilterArticlesListProps>(props => {
	const { className, callback } = props

	const { t } = useTranslation("article")

	useAsyncReducer(initReducer, false)

	const dispatch = useAppDispatch()
	const { setOrder, setSortField, setSearch, setType } = filterArticlesListActions

	const order = useSelector(getFilterArticlesListOrderSelector)
	const sortField = useSelector(getFilterArticlesListSortFieldSelector)
	const search = useSelector(getFilterArticlesListSearchSelector)
	const typeTopic = useSelector(getFilterArticlesListTypeTopicSelector)

	const optionsOrder = useMemo<OptionType<sortOrder>[]>(
		() => [
			{ value: "ASC", content: t("article:asc") },
			{ value: "DESC", content: t("article:desc") }
		],
		[t]
	)

	const optionsSortField = useMemo<OptionType<ArticleSortFieldConstant>[]>(
		() => [
			{ value: ArticleSortFieldConstant.TITLE, content: t("article:byTitle") },
			{ value: ArticleSortFieldConstant.DATE, content: t("article:byDate") },
			{ value: ArticleSortFieldConstant.VIEW, content: t("article:byViews") }
		],
		[t]
	)

	const onChangeOrderHandler = useCallback(
		(value: sortOrder) => {
			dispatch(setOrder(value))
			callback()
		},
		[callback, dispatch, setOrder]
	)

	const onChangeSortFieldHandler = useCallback(
		(value: ArticleSortFieldConstant) => {
			dispatch(setSortField(value))
			callback()
		},
		[callback, dispatch, setSortField]
	)

	const debounceCallback = useDebounce(
		useCallback(() => callback(), [callback]),
		400
	)

	const onChangeSearch = useCallback(
		(value: string) => {
			dispatch(setSearch(value))

			debounceCallback()
		},
		[dispatch, setSearch, debounceCallback]
	)

	const tabs = useMemo<TabsItem<ArticleTypeConstant | "ALL">[]>(
		() => [
			{
				content: t("article:ALL"),
				value: "ALL"
			},
			{
				content: t(ArticleTypeConstant.IT),
				value: ArticleTypeConstant.IT
			},
			{
				content: t(ArticleTypeConstant.DESIGN),
				value: ArticleTypeConstant.DESIGN
			},
			{
				content: t(ArticleTypeConstant.POLITICS),
				value: ArticleTypeConstant.POLITICS
			}
		],
		[t]
	)

	const onChangeTypeTopic = useCallback(
		(tab: TabsItem<ArticleTypeConstant | "ALL">) => {
			dispatch(setType(tab.value))
			debounceCallback()
		},
		[debounceCallback, dispatch, setType]
	)

	return (
		<div className={classNamesHelp(styles.FilterArticlesList, {}, [className])}>
			<div className={styles.sort}>
				<Select
					options={optionsOrder}
					onChange={onChangeOrderHandler}
					value={order}
				/>
				<Select
					className={styles.selectOrder}
					options={optionsSortField}
					onChange={onChangeSortFieldHandler}
					value={sortField}
				/>
			</div>
			<Input
				className={styles.search}
				theme={InputTheme.OUTLINE}
				onChange={onChangeSearch}
				value={search}
			/>
			<Tabs
				tabs={tabs}
				value={typeTopic}
				onTabClick={onChangeTypeTopic}
			/>
		</div>
	)
})
