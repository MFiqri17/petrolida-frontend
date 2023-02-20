import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { UserDataTypes } from './utils/auth'

// Unfortunately, axios cant be used in middleware
export async function getUserDataMiddleware(request: NextRequest) {
  const token = request.cookies.get('petrolida/token')?.value
  const bearer = token ? `Bearer ${token}` : ''
  try {
    const res = await fetch('https://admin.tesdeveloper.me/api/user', {
      headers: {
        Authorization: bearer,
      },
    })
    const data = await res.json()
    return data.data
  } catch (error) {
    return
  }
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const userData = await getUserDataMiddleware(request)
  // Redirect to login page if user is not authenticated
  // Comment the if block on localhost because the cors problem on the API
  // Dont forget to uncomment it before pushing to production
  if (userData === undefined) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [],
}
