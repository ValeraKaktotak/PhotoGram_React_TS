import { onAuthStateChanged, User } from 'firebase/auth'
import { FC, useEffect, useState } from 'react'

//Utils
import { auth } from '@/utils/firebase'

//Context
import { userAuthContext } from '@/context/UserAuthContext'

interface IUserAuthProviderProps {
  children: React.ReactNode
}

interface IValue {
  user: User | null
}

export const UserAuthProvider: FC<IUserAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }

      return () => {
        unsubscribe()
      }
    })
  }, [])

  const value: IValue = { user }

  return (
    <userAuthContext.Provider value={value}>
      {children}
    </userAuthContext.Provider>
  )
}
