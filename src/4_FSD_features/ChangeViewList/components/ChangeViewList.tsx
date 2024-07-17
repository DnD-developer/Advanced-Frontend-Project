import { DetailedView, PlateView } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button, ButtonTheme } from "@ui/Button"
import { memo, useCallback, useState } from "react"
import styles from "./ChangeViewList.module.scss"

type ChangeViewListProps = {
	changeViewToPlate: () => void
	changeViewToDetailed: () => void
	className?: string
	defaultView?: "detailedView" | "plateView"
}
export const ChangeViewList = memo<ChangeViewListProps>(props => {
	const { className, defaultView = "plateView", changeViewToPlate, changeViewToDetailed } = props

	const [viewDetailedState, setDetailedState] = useState(defaultView === "detailedView")
	const [viewPlateState, setPlateState] = useState(defaultView === "plateView")

	const onChangeViewToPlateHandler = useCallback(() => {
		setDetailedState(false)
		setPlateState(true)

		changeViewToPlate()
	}, [changeViewToPlate])

	const onChangeViewToDetailedHandler = useCallback(() => {
		setPlateState(false)
		setDetailedState(true)

		changeViewToDetailed()
	}, [changeViewToDetailed])

	return (
		<div className={classNamesHelp(styles.ChangeViewList, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR}
				className={classNamesHelp(styles.button, { [styles.active]: viewPlateState }, [])}
				onClick={onChangeViewToPlateHandler}
			>
				<PlateView />
			</Button>
			<Button
				theme={ButtonTheme.CLEAR}
				className={classNamesHelp(
					styles.button,
					{ [styles.active]: viewDetailedState },
					[]
				)}
				onClick={onChangeViewToDetailedHandler}
			>
				<DetailedView />
			</Button>
		</div>
	)
})
