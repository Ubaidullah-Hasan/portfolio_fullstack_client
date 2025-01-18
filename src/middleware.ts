import { NextRequest, NextResponse } from "next/server";

import { getCurrentUser } from "./services/login.services";


const AuthRoutes = ["/dashboard/login"];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getCurrentUser();

  if (!user) {
    if (pathname.includes(AuthRoutes[0])) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/dashboard/login?redirect=${pathname}`, request.url),
      );
    }
  }

  if (user) {
    if (pathname === AuthRoutes[0]) {
      return NextResponse.redirect(
        new URL(`/dashboard`, request.url),
      );
    }
    
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard", "/dashboard/:page*"],
};
