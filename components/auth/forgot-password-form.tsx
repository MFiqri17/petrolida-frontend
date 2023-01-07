import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { api } from '../../utils/api'
import Spinner from '../utils/spinner'

interface ForgotPasswordFormValue {
  email: string
}

export default function ForgotPasswordForm() {
  const { register, handleSubmit } = useForm<ForgotPasswordFormValue>()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const onSubmit: SubmitHandler<ForgotPasswordFormValue> = (data) => {
    setIsLoading(true)
    const formData = new FormData()
    Object.keys(data).forEach((val) =>
      formData.append(val, data[val as keyof ForgotPasswordFormValue]),
    )
    api
      .post('/forgot-password', formData)
      .then(() => {
        toast.success('The reset password email was sent successfully')
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
      <button
        type="submit"
        className="w-full rounded-full bg-primary p-4 text-white"
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : 'Send Reset Password Email'}
      </button>
    </form>
  )
}
