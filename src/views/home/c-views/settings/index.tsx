import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
	children?: ReactNode
}

const Setting: FC<IProps> = memo(() => {
	return <div>Setting</div>
})

export default Setting
