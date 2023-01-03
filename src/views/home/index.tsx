import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { HomeWrapper } from './style'

interface IProps {
	children?: ReactNode
}

const Home: FC<IProps> = memo(() => {
	return <HomeWrapper>Home</HomeWrapper>
})

export default Home
