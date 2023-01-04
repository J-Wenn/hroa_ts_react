import type { FC, ReactNode } from 'react'
import { memo, Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { HomeLeft, HomeRight, HomeWrapper } from './style'

import CircularProgress from '@mui/material/CircularProgress'

import HomeHeader from '@/components/home-header'
import MenuBar from '@/components/menu-bar'
import { useAppDispatch } from '@/store'
import { getProfile } from '@/store/modules/login'

interface IProps {
	children?: ReactNode
}

const Home: FC<IProps> = memo(() => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getProfile())
	}, [dispatch])

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
})

export default Home
