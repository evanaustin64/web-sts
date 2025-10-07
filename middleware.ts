// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // WAJIB MENGGUNAKAN 'MAINTENANCE_MODE' (tanpa NEXT_PUBLIC_)
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

  const isMaintenancePath = request.nextUrl.pathname.startsWith('/maintenance');
  
  if (isMaintenanceMode && !isMaintenancePath) {
    return NextResponse.rewrite(new URL('/maintenance', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};