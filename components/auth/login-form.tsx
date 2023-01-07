import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { api } from '../../utils/api'
import Spinner from '../utils/spinner'

interface LoginFormValue {
  email: string
  password: string
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormValue>()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const onSubmit: SubmitHandler<LoginFormValue> = (data) => {
    setIsLoading(true)
    const formData = new FormData()
    Object.keys(data).forEach((val) =>
      formData.append(val, data[val as keyof LoginFormValue]),
    )
    api
      .post('/login', formData)
      .then(() => {
        toast.success('Login success')
      })
      .catch((e) => {
        toast.error('Error')
        console.error(e)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-8 space-y-6">
      <input
        type="email"
        className="w-full rounded-full bg-gray-200 p-4"
        placeholder="Email Address"
        required
        {...register('email', { required: true })}
      />
      <input
        type="password"
        className="w-full rounded-full bg-gray-200 p-4"
        placeholder="Your Password"
        required
        {...register('password', { required: true })}
      />
      <div className="flex justify-between">
        <div>
          <input type="checkbox" id="remember" name="remember" value="Bike" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <Link href="/forgot-password">Forgot Password?</Link>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-primary p-4 text-white"
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : 'Log in'}
      </button>
      <button
        type="button"
        className="w-full rounded-full bg-white p-4 font-semibold"
      >
        Log in with Google
      </button>
    </form>
  )
}
