import type { FC } from 'react'

//Components
import Layout from '@/components/layout'

interface IProfile {}

const Profile: FC<IProfile> = ({}) => {
  return (
    <Layout>
      <div>MyPhotos</div>
    </Layout>
  )
}
export default Profile
