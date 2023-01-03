import request from '@/service'

export interface ILoginData {
	mobile: string
	password: string
}

interface Itoken {
	success: boolean
	code: number
	data: string
	message: string
}

export const LoginAction = (data: ILoginData) => {
	return request.post<Itoken>({
		url: '/sys/login',
		data,
	})
}
