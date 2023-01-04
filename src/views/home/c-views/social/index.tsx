import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
	children?: ReactNode
}

const Social: FC<IProps> = memo(() => {
	return <div>Social</div>
})

export default Social
