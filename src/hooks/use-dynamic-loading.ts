import { mapMenuToRoutes } from '@/utils/map-router'
import { useEffect } from 'react'
import { Cookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router-dom'

const cookies = new Cookies()

const useDynamicLoading = () => {
	const loation = useLocation()
	const navigate = useNavigate()
	useEffect(() => {
		const token = cookies.get('hroa_token')
		const roles = cookies.get('hroa_roles')
		!!token ? navigate(loation.pathname) : navigate('/login')
		mapMenuToRoutes(roles)
	}, [])
}

export default useDynamicLoading
