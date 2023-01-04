import styled from 'styled-components'

export const HomeWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
`

export const HomeLeft = styled.div`
	background: url(${require('@/assets/img/logBg.png')}) no-repeat;
	background-size: cover;
	width: 210px;
	min-width: 56px;
	border: 1px solid #000;
`
export const HomeRight = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	min-width: 900px;
	.top-header {
		height: 90px;
		background-color: #f00;
	}

	.main {
		background-color: #fdfdfd;
		padding: 6px;
	}
`
