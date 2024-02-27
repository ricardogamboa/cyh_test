import { NextResponse,  } from 'next/server';
import type { NextRequest } from 'next/server';
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value;
  if (currentUser) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/', request.url));
}
 
export const config = {
  matcher: ['/dashboard', '/dashboard/:path*']
}