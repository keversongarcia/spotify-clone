import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextApiRequest & NextRequest) {
  console.log(req.nextUrl.pathname);
}
