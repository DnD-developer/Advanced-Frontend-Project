import { Button, ButtonTheme } from "@ui/Button"
import { FC } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { getCounterValueSelector } from "../../store/selectors/getCounterValue/getCounterValue.selector"
import { CounterActions } from "../../store/slices/CounterSlice/Counter.slice"

export const Counter: FC = () => {
	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValueSelector)
	const { decrement, increment } = CounterActions

	const onIncrementHandler = () => dispatch(increment())
	const onDecrementHandler = () => dispatch(decrement())

	const { t } = useTranslation()

	return (
		<div data-testid="value-title">
			<h1>{counterValue}</h1>

			<Button
				theme={ButtonTheme.OUTLINE}
				onClick={onIncrementHandler}
				data-testid="btn-increment"
			>
				{t("translation:increment")}
			</Button>

			<Button
				theme={ButtonTheme.OUTLINE}
				onClick={onDecrementHandler}
				style={{ marginLeft: "20px" }}
				data-testid="btn-decrement"
			>
				{t("translation:decrement")}
			</Button>
		</div>
	)
}
