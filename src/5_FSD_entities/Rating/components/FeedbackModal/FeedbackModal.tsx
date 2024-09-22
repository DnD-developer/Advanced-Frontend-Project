import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { Input } from "@ui/Input"
import { Modal } from "@ui/Modal"
import { HStack, VStack } from "@ui/Stack"
import { Text, TextSize } from "@ui/Text"
import { memo, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./FeedbackModal.module.scss"

type FeedbackModalProps = {
	className?: string
	titleFeedback?: string
	rating: number
	onAccept?: (rating: number, feedback: string) => void
	onCancel?: () => void
	isOpen?: boolean
	isLoading?: boolean
}
export const FeedbackModal = memo<FeedbackModalProps>(props => {
	const {
		className,
		titleFeedback,
		onCancel,
		onAccept,
		isOpen = false,
		rating,
		isLoading
	} = props

	const { t } = useTranslation()

	const [feedbackValue, setFeedBackValue] = useState("")
	const [errorFeedback, setErrorFeedback] = useState(false)

	const onChangeFeedbackHandler = useCallback((value: string) => {
		setErrorFeedback(false)
		setFeedBackValue(value)
	}, [])

	const onAcceptHandler = useCallback(() => {
		if (feedbackValue) {
			onAccept?.(rating, feedbackValue)
		} else {
			setErrorFeedback(true)
		}

		setFeedBackValue("")
	}, [feedbackValue, onAccept, rating])

	const onCancelHandler = useCallback(() => {
		onCancel?.()
		setFeedBackValue("")
	}, [onCancel])

	return (
		<Modal
			isOpen={isOpen || isLoading}
			classNames={classNamesHelp("", {}, [className])}
			lazy={true}
			onClose={onCancelHandler}
		>
			<VStack
				align={"center"}
				gap={"gap16"}
			>
				{titleFeedback ?
					<Text
						title={titleFeedback}
						size={TextSize.BIG}
					/>
				:	<></>}
				<Input
					className={styles.input}
					onChange={onChangeFeedbackHandler}
					value={feedbackValue}
					error={errorFeedback}
				/>
				<HStack
					align={"center"}
					justify={"spaceBetween"}
				>
					<Button
						onClick={onAcceptHandler}
						theme={ButtonTheme.OUTLINE}
						disabled={isLoading}
					>
						{t("translation:send")}
					</Button>
					<Button
						onClick={onCancelHandler}
						theme={ButtonTheme.OUTLINE}
						error={true}
					>
						{t("translation:cancel")}
					</Button>
				</HStack>
			</VStack>
		</Modal>
	)
})
