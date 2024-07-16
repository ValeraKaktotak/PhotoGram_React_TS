import type { FC } from 'react'

//Components
import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const Post: FC = () => {
  return (
    <Layout>
      <div className='flex justify-center'>
        <div className='max-w3xl w-full border'>
          <h3 className='bg-slate-800 p-2 text-center text-lg text-white'>
            Create Post
          </h3>

          <div className='p-8'>
            <form>
              <div className='flex flex-col'>
                <Label className='mb-4' htmlFor='caption'>
                  Photo Caption
                </Label>
                <Textarea
                  className='mb-8'
                  id='caption'
                  placeholder='What&#39;s in your photo'
                />
                <div className='flex flex-col'>
                  <Label className='mb-4' htmlFor='photo'>
                    Photos
                  </Label>
                </div>
                <Button className='mt-8 w-32' type='submit'>
                  Post
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Post
