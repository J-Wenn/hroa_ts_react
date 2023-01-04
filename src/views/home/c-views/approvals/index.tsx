import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
	children?: ReactNode
}

const Approvals: FC<IProps> = memo(() => {
	return <div>Approvals</div>
})

export default Approvals
