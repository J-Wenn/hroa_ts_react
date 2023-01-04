import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
	children?: ReactNode
}

const Employees: FC<IProps> = memo(() => {
	return <div>Employees</div>
})

export default Employees
