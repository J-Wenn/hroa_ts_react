import useDynamicLoading from '@/hooks/use-dynamic-loading'
import type { FC, ReactNode } from 'react'
import { memo, Suspense, useRef } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

interface IProps {
	children?: ReactNode
}

const App: FC<IProps> = memo(() => {
	const dlRef = useRef(useDynamicLoading)

	dlRef.current()

	return (
		<div>
			<Suspense fallback="">{useRoutes(routes)}</Suspense>
		</div>
	)
})

export default App
