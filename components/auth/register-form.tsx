'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { api } from '../../utils/api'
import { setToken } from '../../utils/token'
import Spinner from '../utils/spinner'

interface RegisterFormValue {
  name: string
  email: string
  password: string
  confirm_password: string
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValue>()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()

  const onSubmit: SubmitHandler<RegisterFormValue> = (data) => {
    setIsLoading(true)
    const formData = new FormData()
    Object.keys(data).forEach((val) =>
      formData.append(val, data[val as keyof RegisterFormValue]),
    )
    api
      .post('/register', formData)
      .then((res) => {
        toast.success(
          'Register success, please check your email for verify email',
        )
        setToken(res.data.token)
        router.push('/login')
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
        type="text"
        className="w-full rounded-full bg-gray-200 py-4 px-7"
        placeholder="First & Last Name"
        required
        {...register('name', { required: true })}
      />
      <input
        type="email"
        className="w-full rounded-full bg-gray-200 py-4 px-7"
        placeholder="Email Address"
        required
        {...register('email', { required: true })}
      />
      <input
        type="password"
        className="w-full rounded-full bg-gray-200 py-4 px-7"
        placeholder="Create Password"
        minLength={8}
        required
        {...register('password', { required: true })}
      />
      <input
        type="password"
        className="w-full rounded-full bg-gray-200 py-4 px-7"
        placeholder="Confirm Password"
        required
        {...register('confirm_password', {
          required: true,
          validate: (val: string) => {
            if (watch('password') != val) {
              return 'Your passwords do no match'
            }
          },
        })}
      />
      {errors.confirm_password && (
        <p className="text-error">{errors.confirm_password.message}</p>
      )}
      <div className="inline-flex items-center">
        <input
          type="checkbox"
          id="remember"
          name="remember"
          className="mr-2"
          required
        />
        <label htmlFor="remember">
          I agree with the Terms & Conditions of Clarity
        </label>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-primary p-4 text-white"
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : 'Sign up'}
      </button>
      <button
        type="button"
        className="w-full rounded-full bg-white p-4 font-semibold"
      >
        Sign up with Google
      </button>
    </form>
  )
}
