import request from '@/service'

interface ILogin {
	mobile: string
	password: string
}

export const LoginAction = (data: ILogin) => {
	return request.post({
		url: '/sys/login',
		data,
	})
}
