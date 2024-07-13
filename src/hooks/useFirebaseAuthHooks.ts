import { auth } from '@/utils/firebase'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'

export const useFirebaseAuthHooks = {
  logIn: (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  },

  logOut: () => {
    signOut(auth)
  },

  signUp: (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  },

  googleSignIn: () => {
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleAuthProvider)
  }
}
