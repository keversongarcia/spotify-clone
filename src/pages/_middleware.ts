import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextApiRequest & NextRequest) {
  // console.log({
  //   cookies: req.cookies,
  //   pathname: req.nextUrl.pathname,
  // });
  // const cookies = req.cookies;
  // const token = cookies.token;
  // const route = req.nextUrl;
  // if (route.pathname.includes("/api")) {
  //   return NextResponse.next();
  // }
  // if (token) {
  //   if (route.pathname === "/login") {
  //     return NextResponse.redirect("/");
  //   }
  //   if (route.pathname.includes("/api")) {
  //     return NextResponse.next();
  //   }
  // }
}
