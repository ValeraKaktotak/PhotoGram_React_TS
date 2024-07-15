import type { FC } from 'react'

//Components
import Layout from '@/components/layout'

interface IPost {}

const Post: FC<IPost> = ({}) => {
  return (
    <Layout>
      <div>MyPhotos</div>
    </Layout>
  )
}
export default Post
