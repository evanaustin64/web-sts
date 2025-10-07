// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Menggunakan nama variabel yang benar (server-side)
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  // Cek jika path saat ini adalah halaman maintenance itu sendiri
  const isMaintenancePath = request.nextUrl.pathname.startsWith('/maintenance');
  
  // Jika mode maintenance aktif dan path BUKAN halaman maintenance
  if (isMaintenanceMode && !isMaintenancePath) {
    // 2. Gunakan rewrite untuk pengalaman pengguna yang lebih baik
    return NextResponse.rewrite(new URL('/maintenance', request.url));
  }
  
  // Jika tidak, lanjutkan seperti biasa
  return NextResponse.next();
}

// Config matcher untuk menentukan di path mana saja middleware ini akan berjalan
export const config = {
  matcher: [
    /*
     * Cocokkan semua request path kecuali yang dimulai dengan:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Ini mencegah middleware berjalan pada aset yang tidak perlu.
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};