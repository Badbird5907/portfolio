import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/util/server/auth";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  let token = request.cookies.get("token")?.value;
  const authorization = request.headers.get("Authorization");
  if (!token && authorization) {
    const [type, value] = authorization.split(" ");
    if (type === "Bearer") {
      token = value as string;
    }
  }
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!token || !(await verifyToken(token))) {
      console.log("redirecting to signin");
      url.pathname = `/auth/signin`;
      url.searchParams.set("next", request.nextUrl.pathname);
      return NextResponse.redirect(url);
    }
  } else if (request.nextUrl.pathname.startsWith("/api/admin")) {
    if (!token || !(await verifyToken(token))) {
      console.log("returning 401");
      // if the token is invalid
      // return 401
      const response = new Response(
        JSON.stringify({
          success: false,
          message: "Unauthorized",
          code: 401,
        }),
        {
          status: 401,
        }
      );
      response.headers.set("Content-Type", "application/json");
      return response;
    }
  }
  return NextResponse.next();
}
