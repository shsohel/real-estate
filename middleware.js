/** @format */

import { NextResponse } from "next/server";
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies?.get("token")?.value || "";
  // const { token } = parse(request?.headers?.cookie ?? "");

  if (!token && path !== "/auth/login") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*"], /// if same path as like as api it must be ignored
};

// import jwt_decode from "jwt-decode";
// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// // This function can be marked async if using await inside
// export function middleware(request) {
//   const token = request.cookies?.get("token")?.value || "";
//   const decoded = jwt_decode(token);
//   if (!token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   } else if (token && !decoded?.isAdmin) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/dashboard/:path*",
// };
