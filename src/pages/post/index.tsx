import { useContext, useState, type FC } from 'react'

//Context
import { userAuthContext } from '@/context/UserAuthContext'

//Types
import type { PhotoMeta, Post } from '@/types'

//Components
import FileUploader from '@/components/fileUploder'
import Layout from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { OutputFileEntry } from '@uploadcare/react-uploader'

const Post: FC = () => {
  const { user } = useContext(userAuthContext)
  const [fileEntry, setFileEntry] = useState<OutputFileEntry[] | []>([])

  const [post, setPost] = useState<Post>({
    caption: '',
    photos: [],
    likes: 0,
    userLikes: [],
    userId: null,
    date: new Date()
  })

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Uploaded File Entry : ', fileEntry)
    console.log('The create post is : ', post)

    const photoMeta: PhotoMeta[] = fileEntry.map((file: OutputFileEntry) => {
      return { cdnUrl: file.cdnUrl, uuid: file.uuid }
    })

    if (user != null) {
      const newPost: Post = {
        ...post,
        userId: user?.uid || null,
        photos: photoMeta
      }
      console.log('The final posy is  : ', newPost)
    }
  }

  return (
    <Layout>
      <div className='flex justify-center'>
        <div className='max-w3xl w-full border'>
          <h3 className='bg-slate-800 p-2 text-center text-lg text-white'>
            Create Post
          </h3>

          <div className='p-8'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col'>
                <Label className='mb-4' htmlFor='caption'>
                  Photo Caption
                </Label>
                <Textarea
                  className='mb-8'
                  id='caption'
                  placeholder='What&#39;s in your photo'
                  value={post.caption}
                  onChange={(e) =>
                    setPost({ ...post, caption: e.target.value })
                  }
                />
                <div className='flex flex-col'>
                  <Label className='mb-4' htmlFor='photo'>
                    Photos
                  </Label>

                  <FileUploader files={fileEntry} onChange={setFileEntry} />
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
