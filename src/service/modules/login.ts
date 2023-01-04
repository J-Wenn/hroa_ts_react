import request from '@/service'
import { ILoginData, IProfile, Itoken } from './type'

export const LoginAction = (data: ILoginData) => {
	return request.post<Itoken>({
		url: '/sys/login',
		data,
	})
}

export const fetchProfile = () => {
	return request.post<IProfile>({
		url: '/sys/profile',
	})
}
