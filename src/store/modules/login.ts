import { fetchProfile, LoginAction } from '@/service/modules/login'
import { IData, ILoginData } from '@/service/modules/type'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cookies } from 'react-cookie'

const cookie = new Cookies()

export const getLoginToken = createAsyncThunk(
	'login',
	async (data: ILoginData, { dispatch }) => {
		const res = await LoginAction(data)
		dispatch(changeTokenAction(res.data))
		cookie.set('hroa_token', res.data)
	}
)
export const getProfile = createAsyncThunk(
	'profile',
	async (_, { dispatch }) => {
		const { data } = await fetchProfile()
		dispatch(changeProfileAction(data))
		cookie.set('hroa_roles', data.roles)
	}
)

interface ILogin {
	token?: string
	profile?: IData
}

const initialState: ILogin = {
	token: '',
	profile: {},
}

const login = createSlice({
	name: 'login',
	initialState,
	reducers: {
		changeTokenAction(state, { payload }: PayloadAction<string>) {
			state.token = payload
		},
		changeProfileAction(state, { payload }) {
			state.profile = payload
		},
	},
})

export const { changeTokenAction, changeProfileAction } = login.actions

export default login.reducer
