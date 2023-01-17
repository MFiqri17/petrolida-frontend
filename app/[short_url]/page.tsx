'use client'
import React from 'react'
import { notFound, useRouter } from 'next/navigation'
import { api } from '../../utils/api'

const ShortenLink = ({ params }: { params: { short_url: string } }) => {
  const router = useRouter()
  React.useEffect(() => {
    api
      .get(params.short_url || '')
      .then((data) => {
        if (data.data && data.data.destination) {
          window.location.assign(`https://${data.data.destination}`)
        }
      })
      .catch((err) => {
        console.log(err.message)
        notFound()
      })
  }, [params.short_url, router])
  return (
    <div className='flex justify-center items-center mx-0'>
      {' '}
      <p className='text-2xl'>Please wait, You are being redirected</p>{' '}
    </div>
  )
}

export default ShortenLink