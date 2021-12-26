import useTokenStore from "@/hooks/useTokenStore";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextApiRequest & NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.includes("/api/auth")) {
    return NextResponse.next();
  }

  if (pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
