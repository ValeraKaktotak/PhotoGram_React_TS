import { type FC } from 'react'
import { RouterProvider } from 'react-router-dom'

//Routes
import { router } from '@/routes'
import { UserAuthProvider } from './context/UserAuthProvider'

const App: FC = () => {
  return (
    <UserAuthProvider>
      <RouterProvider router={router} />
    </UserAuthProvider>
  )
}
export default App
