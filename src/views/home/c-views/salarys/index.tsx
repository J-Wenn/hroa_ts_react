import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
	children?: ReactNode
}

const Salarys: FC<IProps> = memo(() => {
	return <div>Salarys</div>
})

export default Salarys
