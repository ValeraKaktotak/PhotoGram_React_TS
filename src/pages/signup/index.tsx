import { useState, type FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//Utils
import { useFirebaseAuthHooks } from '@/utils/firebase/requests/useFirebaseAuthHooks'

//Components
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const initialValue: UserSignIn = {
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp: FC = () => {
  const [userInfo, setUserInfo] = useState<UserSignIn>(initialValue)

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      useFirebaseAuthHooks.signUp(userInfo.email, userInfo.password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  const handleGoogleSignIn = async (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault()
    try {
      await useFirebaseAuthHooks.googleSignIn()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleGithubSignIn = async (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault()
    try {
      await useFirebaseAuthHooks.githubSignIn()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='h-screen w-full bg-slate-800'>
      <div className='container mx-auto flex h-full p-6'>
        <div className='flex w-full items-center justify-center'>
          <div className='max-w-sm rounded-xl border bg-card text-card-foreground shadow-sm'>
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader className='space-y-1'>
                  <CardTitle className='text-2xl'>Create an account</CardTitle>
                  <CardDescription>
                    Enter your email below to create your account
                  </CardDescription>
                </CardHeader>
                <CardContent className='grid gap-4'>
                  <div className='grid grid-cols-2 gap-6'>
                    <Button variant='outline' onClick={handleGithubSignIn}>
                      <Icons.gitHub className='mr-2 h-4 w-4' />
                      Github
                    </Button>
                    <Button variant='outline' onClick={handleGoogleSignIn}>
                      <Icons.google className='mr-2 h-4 w-4' />
                      Google
                    </Button>
                  </div>
                  <div className='relative'>
                    <div className='absolute inset-0 flex items-center'>
                      <span className='w-full border-t' />
                    </div>
                    <div className='relative flex justify-center text-xs uppercase'>
                      <span className='bg-background px-2 text-muted-foreground'>
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className='grid gap-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      type='email'
                      value={userInfo.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                      }
                      placeholder='m@example.com'
                    />
                  </div>
                  <div className='grid gap-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input
                      id='password'
                      type='password'
                      placeholder='Password'
                      value={userInfo.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({ ...userInfo, password: e.target.value })
                      }
                    />
                  </div>
                  <div className='grid gap-2'>
                    <Label htmlFor='password'>Confirm password</Label>
                    <Input
                      id='confirmpassword'
                      type='password'
                      placeholder='Confirm password'
                      value={userInfo.confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserInfo({
                          ...userInfo,
                          confirmPassword: e.target.value
                        })
                      }
                    />
                  </div>
                </CardContent>
                <CardFooter className='flex flex-col'>
                  <Button className='w-full' type='submit'>
                    Create account
                  </Button>
                  <p className='mt-3 text-center text-sm'>
                    Already have an account ? <Link to='/login'>Login</Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignUp
