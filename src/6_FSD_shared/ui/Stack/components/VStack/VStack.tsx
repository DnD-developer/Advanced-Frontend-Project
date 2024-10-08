import { memo } from "react"
import type { FlexProps } from "../Flex/Flex"
import { Flex } from "../Flex/Flex"

type VStackProps = Omit<FlexProps, "direction">
export const VStack = memo<VStackProps>(props => {
	return (
		<Flex
			{...props}
			direction={"column"}
		/>
	)
})
