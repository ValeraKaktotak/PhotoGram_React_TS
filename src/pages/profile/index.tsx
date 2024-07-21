import { Edit2Icon } from 'lucide-react'
import { useContext, useEffect, useState, type FC } from 'react'
import { useNavigate } from 'react-router-dom'

//Context
import { userAuthContext } from '@/context/UserAuthContext'

//Types
import type { DocumentResponse, UserProfileResponse } from '@/types'

//Assets
import avatar from '@/assets/images/avatar.png'

//Services
import { getPostByUserId } from '@/repository/post.service'
import { getUserProfile } from '@/repository/userProfile.service'

//Components
import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'
import { RenderPosts } from './RenderPost'

const Profile: FC = () => {
  const navigate = useNavigate()
  const { user } = useContext(userAuthContext)
  const [userData, setUserData] = useState<DocumentResponse[]>([])

  const initialUserInfo: UserProfileResponse = {
    id: '',
    userId: user?.uid,
    userBio: '',
    photoURL: user?.photoURL ? user.photoURL : '',
    displayName: user?.displayName ? user.displayName : 'Guest_user'
  }
  const [userInfo, setUserInfo] = useState<UserProfileResponse>(initialUserInfo)

  const editProfile = () => {
    navigate('/edit-profile', { state: userInfo })
  }

  const fetchData = async (id: string) => {
    const res = await getPostByUserId(id)
    if (res) setUserData(res)
  }

  const getUserProfileInfo = async (userId: string) => {
    const data: UserProfileResponse = (await getUserProfile(userId)) || {}
    if (data.displayName) {
      setUserInfo(data)
    }
  }

  useEffect(() => {
    if (user != null) {
      fetchData(user.uid)
      getUserProfileInfo(user.uid)
    }
  }, [])

  return (
    <Layout>
      <div className='flex justify-center'>
        <div className='w-full max-w-3xl border'>
          <h3 className='bg-slate-800 p-2 text-center text-lg text-white'>
            Profile
          </h3>

          <div className='border-b p-8 pb-4'>
            <div className='mb-2 flex flex-row items-center pb-2'>
              <div className='mr-2'>
                <img
                  src={userInfo.photoURL ? userInfo.photoURL : avatar}
                  alt='avatar'
                  className='h-28 w-28 rounded-full border-2 border-slate-800 object-cover'
                />
              </div>

              <div>
                <div className='ml-3 text-xl'>
                  {userInfo.displayName ? userInfo.displayName : 'Guest_user'}
                </div>

                <div className='ml-3 text-xl'>
                  {user?.email ? user.email : ''}
                </div>
              </div>
            </div>

            <div className='mb-4'>
              {userInfo.userBio
                ? userInfo.userBio
                : 'Please update your bio...'}
            </div>

            <div>
              <Button onClick={editProfile}>
                <Edit2Icon className='mr-2 h-4 w-4' /> Edit Profile
              </Button>
            </div>
          </div>

          <div className='p-8'>
            <h2 className='mb-5'>My Posts</h2>
            <div className='grid grid-cols-2 gap-2 md:grid-cols-3'>
              {userData ? (
                RenderPosts({ data: userData })
              ) : (
                <div>...Loading</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Profile
