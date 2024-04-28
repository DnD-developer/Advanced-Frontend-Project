import { counterStateMap } from "@entities/Counter"
import { userStateMap } from "@entities/User"

export type mainStateMap = {
	counter: counterStateMap
	user: userStateMap
}
