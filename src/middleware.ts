import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./services/auth";
const authRoutes = ["/auth/login", "/auth/register",];

const roleBasedRoutes = {
  user: [/^\/author/],
  admin: [/^\/admin/],
};

type TRole = keyof typeof roleBasedRoutes;

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const user = await getCurrentUser();

  const { pathname } = request.nextUrl;

  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/auth/login?redirect=${pathname}`, request.url)
      );
    }
  }

  if ((user?.role as TRole) && roleBasedRoutes[user?.role as TRole]) {
    if (pathname === "/profile") {
      return NextResponse.next();
    }
    const routes = roleBasedRoutes[user?.role as TRole];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/author/:path*", "/admin/:path*", "/auth/:path*", "/profile"],
};
