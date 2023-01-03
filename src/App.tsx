import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = memo(() => {
  return <div>App</div>
})

export default App