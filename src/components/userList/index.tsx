import { useContext, useEffect, useState, type FC } from 'react'

//Context
import { userAuthContext } from '@/context/UserAuthContext'

//Services
import { getAllUsers } from '@/repository/userProfile.service'

//Assets
import avatar from '@/assets/images/avatar.png'

//Types
import { UserProfileResponse } from '@/types'
import { Link } from 'react-router-dom'
import UserRenderList from './UserRenderList'

const UserList: FC = () => {
  const { user } = useContext(userAuthContext)
  const [suggestedUser, setSuggestedUser] = useState<UserProfileResponse[]>([])

  const getSuggestedUsers = async (userId: string) => {
    const response = (await getAllUsers(userId)) || []
    console.log('The response is  : ', response)
    setSuggestedUser(response)
  }

  useEffect(() => {
    if (user?.uid != null) {
      getSuggestedUsers(user.uid)
    }
  }, [])

  return (
    <div className='px-3 py-8 text-white'>
      <Link to='/profile'>
        <div className='mb-4 flex cursor-pointer flex-row items-center border-b border-gray-400 pb-4'>
          <span className='mr-2'>
            <img
              src={user?.photoURL ? user.photoURL : avatar}
              className='h-10 w-10 rounded-full border-2 border-slate-800 object-cover'
            />
          </span>
          <span className='text-xs'>
            {user?.displayName ? user.displayName : 'Guest_user'}
          </span>
        </div>
      </Link>
      <h3 className='text-sm text-slate-300'>Suggested Friends</h3>
      <div className='my-4'>
        {suggestedUser.length > 0 ? (
          <UserRenderList data={suggestedUser} />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
export default UserList
