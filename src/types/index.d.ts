import { OutputFileEntry } from '@uploadcare/blocks'

interface UserSignIn {
  email: string
  password: string
  confirmPassword: string
}
interface UserLogIn {
  email: string
  password: string
}
interface NavItem {
  name: string
  link: string
  icon: (props?: React.SVGProps<SVGSVGElement>) => JSX.Element
}

interface FileEntry {
  files: OutputFileEntry[]
}

interface Post {
  caption: string
  photos: PhotoMeta[]
  likes: number
  userLikes: []
  userId: string | null
  date: Date
}

interface PhotoMeta {
  cdnUrl: string | null
  uuid: string | null
}

interface DocumentResponse {
  id: string
  caption: string
  photos: PhotoMeta[]
  likes: number
  userLikes: []
  userId: string | null
  date: Date
}
