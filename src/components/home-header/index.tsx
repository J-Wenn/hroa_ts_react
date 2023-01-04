import type { FC, ReactNode } from 'react'
import { memo, useState } from 'react'
import { HeaderWrapper } from './style'

import { useAppSelector } from '@/store'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { shallowEqual } from 'react-redux'

interface IProps {
	children?: ReactNode
}

const HomeHeader: FC<IProps> = memo(() => {
	const [anchorEl, setAnchorEl] = useState<boolean>(false)
	const { profile } = useAppSelector(
		(state) => ({
			profile: state.login.profile,
		}),
		shallowEqual
	)

	return (
		<HeaderWrapper>
			<div className="top">
				<AppBar position="static" sx={{ height: '50px' }}>
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							sx={{ mr: 2 }}
						>
							<MenuOpenIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							江苏{profile?.company}教育科技股份有限公司
						</Typography>
						<Box
							onClick={() => setAnchorEl(true)}
							sx={{ display: 'flex', cursor: 'pointer' }}
						>
							<Avatar src={require('@/assets/img/img.jpeg')} />
							<Button color="inherit">{profile?.username}</Button>
						</Box>
						<Menu
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={anchorEl}
							onClick={() => setAnchorEl(false)}
						>
							<MenuItem onClick={() => setAnchorEl(false)}>Logout</MenuItem>
						</Menu>
					</Toolbar>
				</AppBar>
			</div>
			<div className="bottom">bottom</div>
		</HeaderWrapper>
	)
})

export default HomeHeader
