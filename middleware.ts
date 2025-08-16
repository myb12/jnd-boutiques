import { NextResponse, type NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export async function middleware(request: NextRequest) {
  // Use the matcher to protect all routes under /admin
  const adminPath = '/admin';

  if (request.nextUrl.pathname.startsWith(adminPath)) {
    // Get the token from the request cookies
    const token = request.cookies.get('token');

    // If no token exists, redirect to login
    if (!token) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    try {
      // Get the JWT secret from environment variables
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        throw new Error('JWT_SECRET environment variable is not set');
      }

      // Verify the token
      jwt.verify(token.value, secret);

      // If verification is successful, allow the request to proceed
      return NextResponse.next();
    } catch (error) {
      // If the token is invalid or expired, redirect to login
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};