import axios from 'axios'
import { getToken } from './token'

export const isServer = () => {
  return typeof window === 'undefined'
}

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
})

/** Only intercept client side fetch */
api.interceptors.request.use((config) => {
  /** Get client cookies if client side */
  if (!isServer() && config.headers) {
    const token = getToken()
    config.headers.Authorization = token ? `Bearer ${token}` : ''
  }
  return config
})

export default api
