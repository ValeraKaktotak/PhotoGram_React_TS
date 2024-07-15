import type { FC } from 'react'

//Components
import Layout from '@/components/layout'

interface IMyPhotos {}

const MyPhotos: FC<IMyPhotos> = ({}) => {
  return (
    <Layout>
      <div>MyPhotos</div>
    </Layout>
  )
}
export default MyPhotos
