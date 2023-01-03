import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

interface IProps {
	children?: ReactNode
}

const App: FC<IProps> = memo(() => {
	return <div>{useRoutes(routes)}</div>
})

export default App
