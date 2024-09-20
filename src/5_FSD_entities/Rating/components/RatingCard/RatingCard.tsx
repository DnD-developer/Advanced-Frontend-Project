import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { RatingStars } from "@ui/RatingStars"
import { VStack } from "@ui/Stack"
import { Text, TextSize } from "@ui/Text"
import { memo, useCallback, useState } from "react"
import { FeedbackModal } from "../FeedbackModal/FeedbackModal"
import styles from "./RatingCard.module.scss"

type RatingCardProps = {
	className?: string
	title?: string
	initialRating?: number
	isLocked?: boolean
	isFeedback: boolean
	titleFeedback?: string
	onAccept?: (rating: number, feedback?: string) => void
	onCancel?: () => void
}
export const RatingCard = memo<RatingCardProps>(props => {
	const {
		className,
		title,
		initialRating,
		isLocked,
		onAccept,
		onCancel,
		isFeedback,
		titleFeedback
	} = props

	const [isOpenFeedback, setIsOpenFeedback] = useState(false)
	const [selectedRating, setSelectedRating] = useState(initialRating || 0)
	const [isReset, setIsReset] = useState(false)

	const onSelectHandler = useCallback(
		(rating: number) => {
			if (isFeedback) {
				setIsOpenFeedback(true)
				setSelectedRating(rating)
				setIsReset(false)
			} else {
				onAccept?.(rating)
			}
		},
		[isFeedback, onAccept]
	)

	const onAcceptHandler = useCallback(
		(rating: number, feedback: string) => {
			setIsOpenFeedback(false)
			onAccept?.(rating, feedback)
		},
		[onAccept]
	)

	const onCancelHandler = useCallback(() => {
		setIsOpenFeedback(false)
		setSelectedRating(initialRating || 0)
		setIsReset(true)
		onCancel?.()
	}, [initialRating, onCancel])

	return (
		<VStack
			gap={"gap16"}
			className={classNamesHelp("", {}, [className])}
		>
			<Text
				title={title}
				size={TextSize.BIG}
			/>
			<RatingStars
				className={styles.ratingStars}
				isLocked={isLocked}
				isReset={isReset}
				initialRating={initialRating}
				onChangeRating={onSelectHandler}
			/>
			<FeedbackModal
				rating={selectedRating}
				isOpen={isOpenFeedback}
				titleFeedback={titleFeedback}
				onAccept={onAcceptHandler}
				onCancel={onCancelHandler}
			/>
		</VStack>
	)
})
