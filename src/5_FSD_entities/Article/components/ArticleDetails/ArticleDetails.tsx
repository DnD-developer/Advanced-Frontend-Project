import { CalendarIcon, EyeIcon } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { asyncReducersList, useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { Avatar, AvatarSize, AvatarTheme } from "@ui/Avatar"
import { Text, TextSize } from "@ui/Text"
import { memo, ReactNode, useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { ArticleBlockTypeConstant } from "../../constants/ArticleBlock.constant"
import { getArticleDataSelector } from "../../store/selectors/getArticleData/getArticleData.selector"
import { getArticleErrorSelector } from "../../store/selectors/getArticleError/getArticleError.selector"
import { getArticleIsLoadingSelector } from "../../store/selectors/getArticleIsLoading/getArticleIsLoading.selector"
import { articleReducer } from "../../store/slices/article.slice"
import { fetchArticleDataByIdThunk } from "../../store/thunks/fetchArticleDataByIdThunk/fetchArticleDataById.thunk"
import { articleBlockDataType } from "../../types/articleBlockData.type"
import styles from "./ArticleDetails.module.scss"
import { ArticleBlockCode } from "./ui/ArticleBlockCode/ArticleBlockCode"
import { ArticleBlockImage } from "./ui/ArticleBlockImage/ArticleBlockImage"
import { ArticleBlockText } from "./ui/ArticleBlockText/ArticleBlockText"
import { ArticleDetailsError } from "./ui/ArticleDetailsError/ArticleDetailsError"
import { ArticlesDetailsSkeleton } from "./ui/ArticleDetailsSkeleton/ArticlesDetailsSkeleton"
import { TextWithIcon } from "./ui/TextWithIcon/TextWithIcon"

type ArticleDetailsProps = {
	id: string | number
	className?: string
}

const initReducers: asyncReducersList = {
	articleDetails: articleReducer
}
export const ArticleDetails = memo<ArticleDetailsProps>(props => {
	const { className, id } = props

	useAsyncReducer(initReducers, false)

	const dispatch = useAppDispatch()

	const { t } = useTranslation("article")

	useEffect(() => {
		if (__PROJECT__ !== "storybook") {
			dispatch(fetchArticleDataByIdThunk(id.toString()))
		}
	}, [dispatch, id])

	const isLoading = useSelector(getArticleIsLoadingSelector)
	const error = useSelector(getArticleErrorSelector)
	const data = useSelector(getArticleDataSelector)

	const renderBlock = useCallback((block: articleBlockDataType) => {
		switch (block.type) {
			case ArticleBlockTypeConstant.TEXT:
				return (
					<ArticleBlockText
						key={block.id}
						paragraphs={block.paragraphs}
						title={block.title}
						className={styles.block}
					/>
				)
			case ArticleBlockTypeConstant.CODE:
				return (
					<ArticleBlockCode
						key={block.id}
						text={block.code}
						title={block.title}
						className={styles.block}
					/>
				)
			case ArticleBlockTypeConstant.IMAGE:
				return (
					<ArticleBlockImage
						key={block.id}
						src={block.src}
						title={block.title}
						className={styles.block}
					/>
				)
			default:
				return null
		}
	}, [])

	let content: ReactNode

	content = (
		<>
			<Avatar
				theme={AvatarTheme.CIRCLE}
				size={AvatarSize.LARGE}
				className={styles.avatar}
				src={data?.img || ""}
				alt={data?.title || ""}
			/>

			<div className={styles.header}>
				<Text
					title={data?.title || t("article:title")}
					size={TextSize.BIG}
				/>
				<Text
					text={data?.subtitle || t("article:subtitle")}
					className={styles.headerMargin}
					size={TextSize.BIG}
				/>
				<TextWithIcon
					Icon={EyeIcon}
					text={data?.views.toString() || "0"}
				/>
				<TextWithIcon
					Icon={CalendarIcon}
					text={data?.createdAt || "01.01.2000"}
				/>
			</div>
			<div className={styles.blockList}>{data?.blocks.map(block => renderBlock(block))}</div>
		</>
	)

	if (isLoading) {
		content = <ArticlesDetailsSkeleton />
	}

	if (error) {
		content = <ArticleDetailsError />
	}

	return <div className={classNamesHelp(styles.ArticleDetails, {}, [className])}>{content}</div>
})
