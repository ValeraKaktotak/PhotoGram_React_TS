import { createBrowserRouter } from 'react-router-dom'

//Pages
import Error from '@/pages/error'
import Home from '@/pages/home'
import Login from '@/pages/login'
import MyPhotos from '@/pages/myphotos'
import Post from '@/pages/post'
import Profile from '@/pages/profile'
import SignUp from '@/pages/signup'
import ProtectedRoutes from './components/ProtectedRoutes'

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: '/post',
        element: <Post />,
        errorElement: <Error />
      },
      {
        path: '/profile',
        element: <Profile />,
        errorElement: <Error />
      },
      {
        path: '/myphotos',
        element: <MyPhotos />,
        errorElement: <Error />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <Error />
  }
])
