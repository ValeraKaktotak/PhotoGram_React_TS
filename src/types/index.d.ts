import { OutputFileEntry } from '@uploadcare/blocks'

interface FileEntry {
  files: OutputFileEntry[]
}

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
