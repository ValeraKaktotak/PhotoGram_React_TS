import type { FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoutes: FC = () => {
  const isAuth: boolean = true
  const location = useLocation()

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  )
}
export default ProtectedRoutes
