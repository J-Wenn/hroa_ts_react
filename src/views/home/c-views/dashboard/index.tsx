import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
	children?: ReactNode
}

const Dashboard: FC<IProps> = memo(() => {
	return <div>Dashboard</div>
})

export default Dashboard
