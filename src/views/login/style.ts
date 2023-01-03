// import styled from 'styled-components'
import styled from '@emotion/styled'

export const LoginWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: url(${require('@/assets/img/login.jpg')}) center center no-repeat;
`

export const LoginPanel = styled.div`
	width: 520px;
	height: 400px;
	margin: 0 auto;
	transform: translateY(50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	.header {
		width: 450px;
		height: 50px;
		background: url(${require('@/assets/img/login-logo.png')}) center center
			no-repeat;
	}

	.form {
		flex: 1;
		width: inherit;
		margin-top: 40px;
		padding: 0 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 20px;
		.username,
		.password {
			background-color: #d4e4ff;
			border-radius: 5px;
			width: initial;
		}
		.password {
			margin: 0;
		}
	}
`
