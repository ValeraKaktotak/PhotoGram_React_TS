import { HeartIcon, MessageCircle } from 'lucide-react'
import type { FC } from 'react'

//Utils
import { cn } from '@/lib/utils'

//Types
import type { DocumentResponse } from '@/types'

//Assets
import image2 from '@/assets/images/image2.jpg'

//Components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface IPostcard {
  data: DocumentResponse
}

const Postcard: FC<IPostcard> = ({ data }) => {
  return (
    <Card className='mb-6'>
      <CardHeader className='flex flex-col p-3'>
        <CardTitle className='flex items-center justify-start text-center text-sm'>
          <span className='mr-2'>
            <img
              src={image2}
              className='h-10 w-10 rounded-full border-2 border-slate-800 object-cover'
            />
          </span>
          <span>Guest_user</span>
        </CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <img src={data.photos ? data.photos[0].cdnUrl ?? '' : ''} />
      </CardContent>
      <CardFooter className='flex flex-col p-3'>
        <div className='mb-3 flex w-full justify-between'>
          <HeartIcon className={cn('mr-3', 'cursor-pointer')} />
          <MessageCircle className='mr-3' />
        </div>
        <div className='w-full text-sm'>{0} likes</div>
        <div className='w-full text-sm'>
          <span>Guest_user</span>: {data.caption}
        </div>
      </CardFooter>
    </Card>
  )
}
export default Postcard
