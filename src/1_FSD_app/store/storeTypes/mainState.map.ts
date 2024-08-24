import { type mainStateAsyncMap } from "./mainStateAsync.map"
import { type mainStateStaticMap } from "./mainStateStatic.map"

export type mainStateMap = mainStateStaticMap & mainStateAsyncMap
