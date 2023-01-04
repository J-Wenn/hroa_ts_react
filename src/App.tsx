import useDynamicLoading from '@/hooks/use-dynamic-loading'
import type { FC } from 'react'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

const App: FC = () => {
	useDynamicLoading()
	console.log(333)
	return (
		<div>
			<Suspense fallback="">{useRoutes(routes)}</Suspense>
		</div>
	)
}

export default App
