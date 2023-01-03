import { lazy } from 'react'
import { Cookies } from 'react-cookie'
import { Navigate, RouteObject } from 'react-router-dom'

const Login = lazy(() => import('@/views/login'))
const Home = lazy(() => import('@/views/home'))

interface IAddRoute {
	(token: string): void
}

const cookies = new Cookies()
const token = cookies.get('token')

const routes: RouteObject[] = [
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/home',
		element: <Home />,
	},
]

const DycAddRoute: IAddRoute = (token) => {
	!token
		? routes.push({
				path: '/',
				element: <Navigate to="/login" />,
		  })
		: routes.push({
				path: '/',
				element: <Navigate to="/home" />,
		  })
}

DycAddRoute(token)

export default routes
