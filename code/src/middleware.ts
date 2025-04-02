import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Paths that require authentication
const protectedPaths = [
  '/profile',
]

// Paths that should be accessible only for non-authenticated users
const authPaths = [
  '/login',
  '/signup'
]

export function middleware(request: NextRequest) {
  console.log('middleware fire');
  const token = request.cookies.get('auth-token')?.value
  const { pathname } = request.nextUrl

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path))
  const isAuthPath = authPaths.some(path => pathname.startsWith(path))

  // Redirect authenticated users away from auth pages
  if (isAuthPath && token) {
    return NextResponse.redirect(new URL('/profile', request.url))
  }

  // Redirect unauthenticated users to signin
  if (isProtectedPath && !token) {
    const response = NextResponse.redirect(new URL('/signin', request.url))
    response.cookies.delete('auth-token')
    return response
  }

  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
} 