import { memo } from "react"
import { Flex, FlexProps } from "../Flex/Flex"

type HStackProps = Omit<FlexProps, "direction">
export const HStack = memo<HStackProps>(props => {
	return (
		<Flex
			{...props}
			direction={"row"}
		/>
	)
})
