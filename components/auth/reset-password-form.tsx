'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { api } from '../../utils/api'
import Spinner from '../utils/spinner'

interface ResetPasswordFormValue {
  email: string
  password: string
  confirm_password: string
}

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormValue>()
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') || ''
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const onSubmit: SubmitHandler<ResetPasswordFormValue> = (data) => {
    setIsLoading(true)
    const formData = new FormData()
    Object.keys(data).forEach((val) =>
      formData.append(val, data[val as keyof ResetPasswordFormValue]),
    )
    formData.append('token', token)
    api
      .post('/reset-password', formData)
      .then(() => {
        toast.success('Reset password success')
        router.replace('/login')
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
        className="w-full rounded-full bg-gray-200 py-4 px-7"
        placeholder="Email Address"
        required
        {...register('email', { required: true })}
      />
      <input
        type="password"
        className="w-full rounded-full bg-gray-200 py-4 px-7"
        placeholder="Create New Password"
        minLength={8}
        required
        {...register('password', { required: true })}
      />
      <input
        type="password"
        className="w-full rounded-full bg-gray-200 py-4 px-7"
        placeholder="Confirm New Password"
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

      <button
        type="submit"
        className="w-full rounded-full bg-primary p-4 text-white"
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : 'Reset Password'}
      </button>
    </form>
  )
}
