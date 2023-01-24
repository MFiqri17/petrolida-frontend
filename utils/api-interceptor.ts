import { cookies } from 'next/headers'

import api, { isServer } from './api'

/** Must be called when fetching serverside */
export const serverApiInterceptors = () => {
  api.interceptors.request.use((config) => {
    /** Get cookies from context if server side */
    if (isServer() && config.headers) {
      const serverCookies = cookies()
      const token = serverCookies.get('petrolida/token')?.value
      config.headers.Authorization = token ? `Bearer ${token}` : ''
    }
    return config
  })
}
