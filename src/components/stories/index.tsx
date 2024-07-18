import type { FC } from 'react'

//Assets
import image2 from '@/assets/images/image2.jpg'
import image3 from '@/assets/images/image3.jpg'
import image5 from '@/assets/images/image5.jpg'
import image6 from '@/assets/images/image6.jpg'
import image7 from '@/assets/images/image7.jpg'

interface IStories {}

//Todo dynamic fetch last 5-7 people posts
const Stories: FC<IStories> = ({}) => {
  return (
    <div className='flex justify-between'>
      <img
        src={image2}
        className='h-20 w-20 rounded-full border-4 border-slate-800 object-cover'
      />
      <img
        src={image3}
        className='h-20 w-20 rounded-full border-4 border-slate-800 object-cover'
      />
      <img
        src={image5}
        className='h-20 w-20 rounded-full border-4 border-slate-800 object-cover'
      />
      <img
        src={image6}
        className='h-20 w-20 rounded-full border-4 border-slate-800 object-cover'
      />
      <img
        src={image7}
        className='h-20 w-20 rounded-full border-4 border-slate-800 object-cover'
      />
      <img
        src={image3}
        className='h-20 w-20 rounded-full border-4 border-slate-800 object-cover'
      />
      <img
        src={image2}
        className='h-20 w-20 rounded-full border-4 border-slate-800 object-cover'
      />
    </div>
  )
}
export default Stories
