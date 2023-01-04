import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { NotFoundWrapper } from './style'

interface IProps {
	children?: ReactNode
}

const NotFound: FC<IProps> = memo(() => {
	return (
		<NotFoundWrapper>
			<h1>404</h1>
			<h2>Not Found</h2>
		</NotFoundWrapper>
	)
})

export default NotFound
