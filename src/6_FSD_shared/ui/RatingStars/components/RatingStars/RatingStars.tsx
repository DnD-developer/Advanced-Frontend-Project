import { Star } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { memo, useCallback, useState } from "react"
import { HStack } from "../../../Stack"
import styles from "./RatingStars.module.scss"

type RatingStarsProps = {
	className?: string
	rating?: number
	isReset?: boolean
	isLocked?: boolean
	onChangeRating?: (value: number) => void
}

export const RatingStars = memo<RatingStarsProps>(props => {
	const { className, isLocked = false, rating = 0, onChangeRating } = props

	const [hoverRating, setHoverRating] = useState(0)

	const ratingCount = [1, 2, 3, 4, 5]

	const onChangeRatingHandler = useCallback(
		(newRating: number) => () => {
			if (!isLocked) {
				setHoverRating(0)
				onChangeRating?.(newRating)
			}
		},
		[isLocked, onChangeRating]
	)

	const onHoverRatingHandler = useCallback(
		(newHoverRating: number) => () => {
			if (!isLocked) {
				setHoverRating(newHoverRating)
			}
		},
		[isLocked]
	)

	const onClearHoverRatingHandler = useCallback(() => {
		if (!isLocked) {
			setHoverRating(0)
		}
	}, [isLocked])

	return (
		<div
			className={classNamesHelp("", { [styles.cursorPointer]: !isLocked }, [className])}
			onMouseLeave={onClearHoverRatingHandler}
		>
			<HStack gap={"gap16"}>
				{ratingCount.map(rat => (
					<Star
						key={rat}
						onClick={onChangeRatingHandler(rat)}
						onMouseEnter={onHoverRatingHandler(rat)}
						className={classNamesHelp(
							styles.RatingStar,
							{
								[styles.cursorPointer]: !isLocked,
								[styles.RatingStarFill]: rating >= rat || hoverRating >= rat
							},
							[]
						)}
					/>
				))}
			</HStack>
		</div>
	)
})
