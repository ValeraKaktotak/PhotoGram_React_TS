import { HeartIcon } from 'lucide-react'
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
  console.log(userData)

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

  const renderPost = () => {
    return userData.map((item) => {
      return (
        <div key={item.photos[0].uuid} className='relative'>
          <div className='group absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-transparent transition-all duration-200 hover:bg-slate-950 hover:bg-opacity-75'>
            <div className='flex h-full w-full flex-col items-center justify-center'>
              <HeartIcon className='hidden fill-white group-hover:block' />
              <div className='hidden text-white group-hover:block'>
                {item.likes} likes
              </div>
            </div>
          </div>
          <img
            src={`${item.photos[0].cdnUrl}/-/progressive/yes/-/scale_crop/300x300/center/`}
          />
          <p>{item.caption}</p>
        </div>
      )
    })
  }

  return (
    <Layout>
      <div className='flex justify-center'>
        <div className='w-full max-w-3xl border'>
          <h3 className='bg-slate-800 p-2 text-center text-lg text-white'>
            My Photos
          </h3>
          <div className='p-8'>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
              {userData ? renderPost() : <div>...Loading</div>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default MyPhotos
