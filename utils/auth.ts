import api from './api'
import { serverApiInterceptors } from './api-interceptor'
import { removeToken } from './token'

export type UserDataTypes = {
  success: boolean
  data: {
    id: number
    name: string
    email: string
    email_verified_at: any
    role: string
    admin_id: any
    created_at: string
    updated_at: string
    message?: string
  }
}

// This should run on the server side
export async function getUserData() {
  serverApiInterceptors()
  try {
    const res = await api.get<UserDataTypes>('/user')
    return res.data
  } catch (error) {
    return
  }
}
