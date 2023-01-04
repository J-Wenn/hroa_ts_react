import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
	children?: ReactNode
}

const Permission: FC<IProps> = memo(() => {
	return <div>Permission</div>
})

export default Permission
