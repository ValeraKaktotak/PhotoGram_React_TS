import { DocumentResponse } from '@/types'
import type { FC } from 'react'

interface IPostcard {
  data: DocumentResponse
}

const Postcard: FC<IPostcard> = ({ data }) => {
  console.log(data)

  return <div>Postcard</div>
}
export default Postcard
