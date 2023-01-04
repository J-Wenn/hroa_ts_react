import { mapMenuToRoutes } from '@/utils/map-router'
import { useEffect } from 'react'
import { Cookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router-dom'

const cookies = new Cookies()

const useDynamicLoading = () => {
	console.log(222)
	const loation = useLocation()
	const navigate = useNavigate()
	const token = cookies.get('hroa_token')

	useEffect(() => {
		// if (!!token) {
		// 	console.log('jinlaile')
		// 	navigate(loation.pathname)
		// } else {
		// 	navigate('/login')
		// }
		const roles = cookies.get('hroa_roles')
		roles && mapMenuToRoutes(roles)
	}, [token, navigate, loation])
}

export default useDynamicLoading
