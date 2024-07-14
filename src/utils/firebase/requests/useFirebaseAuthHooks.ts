import { auth } from '@/utils/firebase'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential
} from 'firebase/auth'

export const useFirebaseAuthHooks = {
  logIn: (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password)
  },

  logOut: (): Promise<void> => {
    return signOut(auth)
  },

  signUp: (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password)
  },

  googleSignIn: (): Promise<UserCredential> => {
    const googleAuthProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleAuthProvider)
  }
}
