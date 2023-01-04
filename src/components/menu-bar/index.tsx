import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { MenuWrapper } from './style'

interface IProps {
	children?: ReactNode
}

const MenuBar: FC<IProps> = memo(() => {
	return (
		<MenuWrapper>
			<Link className='logo' to="/home" />
		</MenuWrapper>
	)
})

export default MenuBar
