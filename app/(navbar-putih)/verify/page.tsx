'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import Spinner from '../../../components/utils/spinner'
import { api } from '../../../utils/api'

export default function VerifyPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const router = useRouter()
  const id = searchParams ? (searchParams.id as string) : ''
  const hash = searchParams ? (searchParams.hash as string) : ''

  React.useEffect(() => {
    async function verifyUser(id: string, hash: string) {
      const formData = new FormData()
      formData.append('id', id)
      formData.append('hash', hash)
      api
        .post('/reset-password', formData)
        .then(() => {
          toast.success('Your account has been verified')
        })
        .catch((e) => {
          console.error(e)
          toast.error('Error when verifying account')
        })
        .finally(() => {
          router.replace('/login')
        })
    }
    verifyUser(id, hash)
  }, [])

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-3">
      <Spinner className="h-12 w-12" />
      <h1 className="text-2xl font-semibold text-primary">
        Verifying Account...
      </h1>
    </main>
  )
}
