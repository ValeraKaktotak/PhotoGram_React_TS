import { useContext, type FC } from 'react'
import { RouterProvider } from 'react-router-dom'

//Routes
import { router } from '@/routes'
import { userAuthContext } from './context/UserAuthContext'
import { UserAuthProvider } from './context/UserAuthProvider'

const App: FC = () => {
  const { user } = useContext(userAuthContext)

  console.log(user)
  return (
    <UserAuthProvider>
      <RouterProvider router={router} />
    </UserAuthProvider>
  )
}
export default App
