import { fetchProfile, LoginAction } from '@/service/modules/login'
import { IData, ILoginData } from '@/service/modules/type'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cookies } from 'react-cookie'
import { NavigateFunction } from 'react-router-dom'

const cookie = new Cookies()

export const getLoginToken = createAsyncThunk(
	'login',
	async (data: ILoginData, { dispatch }) => {
		const res = (await LoginAction(data)) as any
		dispatch(changeTokenAction(res.data.data))
		cookie.set('hroa_token', res.data.data)
	}
)
export const getProfile = createAsyncThunk(
	'profile',
	async (navigate: NavigateFunction, { dispatch }) => {
		const res = (await fetchProfile()) as any
		console.log(res)
		// if (!res) {
		// 	navigate('/login')
		// 	cookie.remove('hroa_token')
		// 	return
		// }
		dispatch(changeProfileAction(res.data.data))
		cookie.set('hroa_roles', res.data.data.roles)
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
