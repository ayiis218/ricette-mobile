import { NextResponse } from 'next/server';
import jwtDecode from 'jwt-decode';

export default function middleware(req) {
  const { token } = req.cookies;
  const { pathname, origin } = req.nextUrl;

  let decoded = '';
  if (token) {
    decoded = jwtDecode(token);
  }

  // Private Route
  if (!token) {
    if (
      pathname !== '/' &&
      pathname !== '/auth/login' &&
      pathname !== '/auth/register' &&
      pathname !== '/auth/forgot' &&
      !pathname.match(/\/auth\/reset\/[\w]*/gi)
    ) {
      return NextResponse.redirect(`${origin}/auth/login`);
    }
  }

  // Public Route
  if (token) {
    if (
      pathname === '/auth/login' ||
      pathname === '/auth/register' ||
      pathname === '/auth/forgot' ||
      pathname.match(/\/auth\/reset\/[\w]*/gi)
    ) {
      return NextResponse.redirect(`${origin}`);
    }
  }
}
