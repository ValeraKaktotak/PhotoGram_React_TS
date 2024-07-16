import * as LR from '@uploadcare/blocks'
import blocksStyles from '@uploadcare/blocks/web/lr-file-uploader-regular.min.css?url'
import '@uploadcare/react-uploader/core.css'
import type { FC } from 'react'

LR.registerBlocks(LR)

const FileUploader: FC = () => {
  return (
    <>
      <lr-config
        ctx-name='my-uploader'
        pubkey='56be2171d392afd4dc13'
      ></lr-config>
      <lr-file-uploader-regular
        ctx-name='my-uploader'
        css-src={blocksStyles}
      ></lr-file-uploader-regular>
    </>
  )
}
export default FileUploader
