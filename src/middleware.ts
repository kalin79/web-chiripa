import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
// export { default } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  // console.log(token)

  const { pathname } = req.nextUrl;

  // Redirección si el usuario intenta acceder a /login estando logueado
  if (pathname === '/auth/login' && token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Redirigir si el usuario intenta acceder a cualquier ruta en /auth/* y ya está logueado
  if (pathname.startsWith('/auth/') && token) {
    return NextResponse.redirect(new URL('/', req.url));
  }


  // Proteger rutas que requieren autenticación
  const protectedPaths = ['/perfil', '/mi-historial'];
  if (protectedPaths.some((path) => pathname.startsWith(path)) && !token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next()

}
// Aplica middleware solo en ciertas rutas
export const config = {
  matcher: ['/auth/:path*', '/perfil', '/mi-historial'], // Rutas donde se aplica el middleware
};