import { AsyncThunkAction, GetDispatch, GetState } from "@reduxjs/toolkit"
import { AsyncThunkConfig, GetThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk"
import axios, { AxiosStatic } from "axios"

type actionThunkType<Return, Arg, ThunkConfigType extends AsyncThunkConfig> = (
	arg: Arg
) => AsyncThunkAction<Return, Arg, ThunkConfigType>

jest.mock("axios")
const mockedAxios = jest.mocked(axios)

export class AsyncThunkMock<Return, Arg, ThunkConfigType extends AsyncThunkConfig> {
	dispatch: GetDispatch<ThunkConfigType>
	getState: () => GetState<ThunkConfigType>
	private readonly asyncThunk: actionThunkType<Return, Arg, ThunkConfigType>
	api: jest.MockedFunctionDeep<AxiosStatic>
	navigate: jest.Mock

	constructor(asyncThunk: actionThunkType<Return, Arg, ThunkConfigType>) {
		this.dispatch = jest.fn() as unknown as GetDispatch<ThunkConfigType>
		this.getState = jest.fn()
		this.api = mockedAxios
		this.navigate = jest.fn()
		this.asyncThunk = asyncThunk
	}

	async callThunk(state: Arg) {
		const actionCreator = this.asyncThunk(state)

		const extra = {
			api: this.api,
			navigate: this.navigate
		} as GetThunkAPI<ThunkConfigType>["extra"]

		const action = await actionCreator(this.dispatch, this.getState, extra)

		return action
	}
}
