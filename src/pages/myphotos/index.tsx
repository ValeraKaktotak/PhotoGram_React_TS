import { useContext, useEffect, useState, type FC } from 'react'

//Context
import { userAuthContext } from '@/context/UserAuthContext'

//Services
import { getPostByUserId } from '@/repository/post.service'

//Types
import type { DocumentResponse, Post } from '@/types'

//Components
import Layout from '@/components/layout'

const MyPhotos: FC = () => {
  const { user } = useContext(userAuthContext)
  const [userData, setUserData] = useState<DocumentResponse[]>([])

  const getAllPost = async (id: string) => {
    try {
      const querySnapshot = await getPostByUserId(id)

      const tempArr: DocumentResponse[] = []
      if (querySnapshot.size > 0) {
        querySnapshot.forEach((doc) => {
          const data = doc.data() as Post
          const responseObj: DocumentResponse = {
            id: doc.id,
            ...data
          }

          tempArr.push(responseObj)
        })
        setUserData(tempArr)
      } else {
        console.log('No such document')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user != null) {
      getAllPost(user.uid)
    }
  }, [])

  return (
    <Layout>
      <div>MyPhotos</div>
    </Layout>
  )
}
export default MyPhotos
