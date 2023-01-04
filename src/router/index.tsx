import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Login = lazy(() => import('@/views/login'))
const Home = lazy(() => import('@/views/home'))
const NotFound = lazy(() => import('@/views/not-found'))

const Dashboard = lazy(() => import('@/views/home/c-views/dashboard'))
const Social = lazy(() => import('@/views/home/c-views/social'))

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to="/home" />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/home',
		element: <Home />,
		children: [
			{
				path: '/home',
				element: <Navigate to={'/home/dashboard'} />,
			},
			{
				path: '/home/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/home/social',
				element: <Social />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
]

export function mapPathNameToEl(key: string) {
	const Module = lazy(() => import(`@/views/home/c-views/${key}`))
	return <Module />
}

export default routes
