import type { FC, ReactNode } from 'react'
import { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

interface IProps {
	children?: ReactNode
}

const App: FC<IProps> = memo(() => {
	return (
		<div>
			<Suspense fallback="">{useRoutes(routes)}</Suspense>
		</div>
	)
})

export default App
