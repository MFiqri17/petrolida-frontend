import Image from 'next/image'
import Link from 'next/link'
import ResetPasswordForm from '../../../components/auth/reset-password-form'

export default function ResetPasswordPage() {
  return (
    <div className="relative flex items-center justify-center overflow-clip bg-light">
      <div className="z-20 my-40 mx-3 rounded-xl border-2 bg-white/25 p-10 backdrop-blur-sm backdrop-filter sm:mx-0 sm:w-1/3">
        <h1 className="text-center text-4xl font-semibold">Reset Password</h1>
        <ResetPasswordForm />
      </div>
      <div className="absolute -right-24 -bottom-40">
        <Image
          src={'/images/auth-bg.png'}
          width={1047}
          height={1630}
          alt="trophy"
        />
      </div>
    </div>
  )
}
