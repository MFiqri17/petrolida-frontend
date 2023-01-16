export const getToken = (): string | null => {
  return localStorage.getItem('petrolida/token')
}

export const removeToken = () => {
  localStorage.removeItem('petrolida/token')
}

export const setToken = (token: string) => {
  localStorage.setItem('petrolida/token', token)
}
