import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
	children?: ReactNode
}

const Departments: FC<IProps> = memo(() => {
	return <div>Departments</div>
})

export default Departments
