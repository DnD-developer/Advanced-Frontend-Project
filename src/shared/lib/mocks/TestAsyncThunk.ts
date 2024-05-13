import { AsyncThunkAction, GetDispatch, GetState } from "@reduxjs/toolkit"
import { GetThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk"

type actionThunkType<Return, Arg, ThunkApiConfig> = (
	arg: Arg
) => AsyncThunkAction<Return, Arg, ThunkApiConfig>

export class TestAsyncThunk<Return, Arg, ThunkApiConfig> {
	dispatch: GetDispatch<ThunkApiConfig>
	getState: () => GetState<ThunkApiConfig>
	extra: GetThunkAPI<ThunkApiConfig>["extra"]
	private readonly asyncThunk: actionThunkType<Return, Arg, ThunkApiConfig>

	constructor(
		asyncThunk: actionThunkType<Return, Arg, ThunkApiConfig>,
		extra: GetThunkAPI<ThunkApiConfig>["extra"]
	) {
		this.dispatch = jest.fn() as unknown as GetDispatch<ThunkApiConfig>
		this.getState = jest.fn()
		this.extra = extra
		this.asyncThunk = asyncThunk
	}

	async callThunk(state: Arg) {
		const actionCreator = this.asyncThunk(state)

		const action = await actionCreator(this.dispatch, this.getState, this.extra)

		return action
	}
}
