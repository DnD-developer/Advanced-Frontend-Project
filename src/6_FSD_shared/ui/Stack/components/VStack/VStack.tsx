import { memo } from "react"
import { Flex, FlexProps } from "../Flex/Flex"

type VStackProps = Omit<FlexProps, "direction">
export const VStack = memo<VStackProps>(props => {
	return (
		<Flex
			{...props}
			direction={"column"}
		/>
	)
})
