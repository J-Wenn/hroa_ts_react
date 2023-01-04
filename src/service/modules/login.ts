import request from '@/service'
import { ILoginData, IProfile} from './type'

export const LoginAction = (data: ILoginData) => {
	return request.post({
		url: '/sys/login',
		data,
	})
}

export const fetchProfile = () => {
	return request.post<IProfile>({
		url: '/sys/profile',
	})
}
