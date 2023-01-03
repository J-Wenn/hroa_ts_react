import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import TextField from '@mui/material/TextField'

import { LoginAction } from '@/service/modules/login'
import type { FC, ReactNode } from 'react'
import { memo, useState } from 'react'
import { LoginPanel, LoginWrapper } from './style'

interface IProps {
	children?: ReactNode
}

const Login: FC<IProps> = memo(() => {
	const [showPassword, setShowPassword] = useState(false)
	const [mobile, setMobile] = useState('13800000001')
	const [password, setPassword] = useState('123456')

	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
	}

	const handleLoginClick = () => {
		LoginAction({ mobile, password }).then((res) => {
			console.log(res)
		})
	}

	return (
		<LoginWrapper>
			<LoginPanel>
				<div className="header"></div>
				<div className="form">
					<TextField
						className="username"
						id="outlined-basic"
						label="账号"
						color="secondary"
						variant="outlined"
						onChange={(e) => setMobile(e.target.value)}
						value={mobile}
					/>
					<FormControl
						sx={{ m: 1, width: '25ch' }}
						variant="outlined"
						className="password"
						color="secondary"
					>
						<InputLabel htmlFor="outlined-adornment-password">密码</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type={showPassword ? 'text' : 'password'}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							minRows={6}
							maxRows={16}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showPassword ? (
											<VisibilityOffOutlined />
										) : (
											<VisibilityOutlined />
										)}
									</IconButton>
								</InputAdornment>
							}
							label="密码"
						/>
					</FormControl>
					<Button variant="contained" size="large" onClick={handleLoginClick}>
						登录
					</Button>
				</div>
			</LoginPanel>
		</LoginWrapper>
	)
})

export default Login
