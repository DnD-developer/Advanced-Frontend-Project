import { AsyncThunkAction, GetDispatch, GetState } from "@reduxjs/toolkit"

type actionThunkType<Return, Arg, RejectedValue> = (
	arg: Arg
) => AsyncThunkAction<Return, Arg, RejectedValue>

export class TestAsyncThunk<Return, Arg, RejectedValues> {
	dispatch: GetDispatch<RejectedValues>
	getState: () => GetState<RejectedValues>
	private readonly asyncThunk: actionThunkType<Return, Arg, RejectedValues>

	constructor(asyncThunk: actionThunkType<Return, Arg, RejectedValues>) {
		this.dispatch = jest.fn() as unknown as GetDispatch<RejectedValues>
		this.getState = jest.fn()
		this.asyncThunk = asyncThunk
	}

	async callThunk(state: Arg) {
		const actionCreator = this.asyncThunk(state)

		const action = await actionCreator(this.dispatch, this.getState, undefined)

		return action
	}
}
