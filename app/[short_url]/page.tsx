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
        notFound()
      })
  }, [params.short_url, router])
  return <div>loading...</div>
}

export default ShortenLink
