import { authConfig } from "./server/auth/auth.config";
import NextAuth from "next-auth";

export default NextAuth(authConfig).auth((req) => {
  const isAuthenticated = !!req.auth;

  if (!isAuthenticated) {
    const newUrl = new URL("/signin", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
