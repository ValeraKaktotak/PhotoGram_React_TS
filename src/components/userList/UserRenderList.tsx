import type { FC } from 'react'

//Types
import { UserProfileResponse } from '@/types'

//Assets
import avatar from '@/assets/images/avatar.png'

//Components
import { Button } from '@/components/ui/button'

interface IUserRenderList {
  data: UserProfileResponse[]
}

const UserRenderList: FC<IUserRenderList> = ({ data }) => {
  return data.map((user) => {
    return (
      <div className='mb-4 flex flex-row items-center justify-start border-gray-400'>
        <span className='mr-2'>
          <img
            src={user.photoURL ? user.photoURL : avatar}
            className='h-10 w-10 rounded-full border-2 border-slate-800 object-cover'
          />
        </span>
        <span className='text-xs'>
          {user.displayName ? user.displayName : 'Guest_User'}
        </span>
        <Button className='h-6 bg-slate-900 p-3 py-2 text-xs last-of-type:ml-auto'>
          Follow
        </Button>
      </div>
    )
  })
}
export default UserRenderList
