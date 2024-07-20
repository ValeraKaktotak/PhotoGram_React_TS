import { useContext, type FC } from 'react'

//Context
import { userAuthContext } from '@/context/UserAuthContext'

//Components
import Layout from '@/components/layout'

interface IProfile {}

const Profile: FC<IProfile> = ({}) => {
  const { user } = useContext(userAuthContext)

  return (
    <Layout>
      <div>MyPhotos</div>
    </Layout>
  )
}
export default Profile
