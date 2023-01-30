import Cookies from 'universal-cookie'

export const cookies = new Cookies()

export const getToken = (): string => {
  return cookies.get('petrolida/token')
}

export const removeToken = () => {
  cookies.remove('petrolida/token')
}

export const setToken = (token: string) => {
  cookies.set('petrolida/token', token)
}
