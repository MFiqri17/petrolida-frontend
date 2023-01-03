import { useForm, SubmitHandler } from 'react-hook-form'
import { api } from '../../utils/api'

interface LoginFormValue {
  email: string
  password: string
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValue>()
  const onSubmit: SubmitHandler<LoginFormValue> = (data) => {
    const formData = new FormData()
    Object.keys(data).forEach((val) =>
      formData.append(val, data[val as keyof LoginFormValue]),
    )
    api.post('/login', formData)
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
        <a href="">Forgot Password?</a>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-primary p-4 text-white"
      >
        Log in
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
