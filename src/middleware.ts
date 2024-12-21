import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Redirección para usuarios logueados que intentan acceder a /auth/*
  if (pathname.startsWith('/auth') && token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Redirección de usuarios no autenticados intentando acceder a /cliente/*
  if (pathname.startsWith('/cliente') && !token) {
    const url = req.nextUrl.clone();
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }

  // Redirección de rutas protegidas
  const protectedPaths = ['/perfil', '/mi-historial'];
  if (protectedPaths.some((path) => pathname.startsWith(path)) && !token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next();
}

// Configuración para aplicar middleware solo en ciertas rutas
export const config = {
  matcher: ['/auth/:path*', '/cliente/:path*'], // Rutas donde se aplica el middleware
};
