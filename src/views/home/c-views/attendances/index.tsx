import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
	children?: ReactNode
}

const Attendances: FC<IProps> = memo(() => {
	return <div>Attendances</div>
})

export default Attendances
