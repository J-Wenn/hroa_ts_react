import local from '@/utils/cache'
import { AxiosHeaders, AxiosRequestConfig } from 'axios'
import Request from './request'
import { TIME_OUT } from './request/config'

const request = new Request({
	timeout: TIME_OUT,
	interceptors: {
		requestInterceptor(config: AxiosRequestConfig) {
			const token = local.getCache('token')
			if (!!token) {
				if (config.headers:AxiosHeaders) {
					// config.headers.set('Authorization', `Bearer ${token}`)
					config.headers['Authorization'] = `Bearer ${token}`
				}
			}
			return config
		},
	},
})

export default request
