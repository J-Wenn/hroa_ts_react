import type { FC } from 'react'
import { Suspense, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { HomeLeft, HomeRight, HomeWrapper } from './style'

import CircularProgress from '@mui/material/CircularProgress'

import HomeHeader from '@/components/home-header'
import MenuBar from '@/components/menu-bar'
import { useAppDispatch } from '@/store'
import { getProfile } from '@/store/modules/login'

const Home: FC = () => {
	console.log(111111111111)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	useEffect(() => {
		dispatch(getProfile(navigate))
	}, [dispatch, navigate])

	return (
		<HomeWrapper>
			<HomeLeft>
				<MenuBar />
			</HomeLeft>
			<HomeRight>
				<div className="top-header">
					<HomeHeader />
				</div>
				<div className="main">
					<Suspense fallback={<CircularProgress />}>
						<Outlet />
					</Suspense>
				</div>
			</HomeRight>
		</HomeWrapper>
	)
}

export default Home
