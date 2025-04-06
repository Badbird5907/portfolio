import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/makropad') {
    return NextResponse.redirect('https://github.com/Badbird5907/makropad');
  }

  return NextResponse.next();
}

