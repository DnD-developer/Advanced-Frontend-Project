import { Star } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { memo, useCallback, useEffect, useState } from "react"
import { HStack } from "../../../Stack"
import styles from "./RatingStars.module.scss"

type RatingStarsProps = {
	className?: string
	initialRating?: number
	isReset?: boolean
	isLocked?: boolean
	onChangeRating?: (value: number) => void
}

export const RatingStars = memo<RatingStarsProps>(props => {
	const { className, isLocked = false, initialRating = 0, onChangeRating, isReset } = props

	const [currentRating, setCurrentRating] = useState<number>(initialRating)
	const [hoverRating, setHoverRating] = useState(0)
	const [isLockedState, setIsLockedState] = useState(isLocked)

	const rating = [1, 2, 3, 4, 5]

	useEffect(() => {
		if (isReset) {
			setIsLockedState(isLocked)
			setCurrentRating(initialRating)
			setHoverRating(0)
		}
	}, [initialRating, isLocked, isReset])

	const onChangeRatingHandler = useCallback(
		(newRating: number) => () => {
			if (!isLockedState) {
				setIsLockedState(true)
				setCurrentRating(newRating)
				setHoverRating(0)
				onChangeRating?.(newRating)
			}
		},
		[isLockedState, onChangeRating]
	)

	const onHoverRatingHandler = useCallback(
		(newHoverRating: number) => () => {
			if (!isLockedState) {
				setHoverRating(newHoverRating)
			}
		},
		[isLockedState]
	)

	const onClearHoverRatingHandler = useCallback(() => {
		if (!isLockedState) {
			setHoverRating(0)
		}
	}, [isLockedState])

	return (
		<div
			className={classNamesHelp("", { [styles.cursorPointer]: !isLockedState }, [className])}
			onMouseLeave={onClearHoverRatingHandler}
		>
			<HStack gap={"gap16"}>
				{rating.map(rat => (
					<Star
						key={rat}
						onClick={onChangeRatingHandler(rat)}
						onMouseEnter={onHoverRatingHandler(rat)}
						className={classNamesHelp(
							styles.RatingStar,
							{
								[styles.cursorPointer]: !isLockedState,
								[styles.RatingStarFill]: currentRating >= rat || hoverRating >= rat
							},
							[]
						)}
					/>
				))}
			</HStack>
		</div>
	)
})
