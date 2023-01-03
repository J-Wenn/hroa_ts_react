import { ILoginData, LoginAction } from '@/service/modules/login'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cookies } from 'react-cookie'
const cookie = new Cookies()

export const getLoginToken = createAsyncThunk(
	'login',
	async (data: ILoginData, { dispatch }) => {
		LoginAction(data).then((res) => {
			dispatch(changeTokenAction(res.data))
			cookie.set('hroa_token', res.data)
		})
	}
)

interface ILogin {
	token?: string
}

const initialState: ILogin = {
	token: '',
}

const login = createSlice({
	name: 'login',
	initialState,
	reducers: {
		changeTokenAction(state, { payload }: PayloadAction<string>) {
			state.token = payload
		},
	},
})

export const { changeTokenAction } = login.actions

export default login.reducer
