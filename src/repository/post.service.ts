import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where
} from 'firebase/firestore'

//Types
import { Post } from '@/types'

//Utils
import { db } from '@/utils/firebase'

const COLLECTION_NAME = 'posts'

export const createPost = (post: Post) => {
  return addDoc(collection(db, COLLECTION_NAME), post)
}

export const getPosts = () => {
  const q = query(collection(db, COLLECTION_NAME), orderBy('date', 'desc'))
  return getDocs(q)
}

export const getPostByUserId = (id: string) => {
  const q = query(collection(db, COLLECTION_NAME), where('userId', '==', id))
  return getDocs(q)
}

export const getPost = (id: string) => {
  const docRef = doc(db, COLLECTION_NAME, id)
  return getDoc(docRef)
}

export const deletePost = (id: string) => {
  return deleteDoc(doc(db, COLLECTION_NAME, id))
}
