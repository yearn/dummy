import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const shares = Number(req.nextUrl.searchParams.get("shares"));
  const pps = Number(req.nextUrl.searchParams.get("pps") ?? "1");
  const to = req.nextUrl.searchParams.get("to") ?? "0x0";

  return NextResponse.json({
    to,
    assets: shares * pps,
    usd: "$" + shares * pps,
    admin: process.env.SECRET_TEXT,
  });
}
