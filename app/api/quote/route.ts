import { NextRequest, NextResponse } from "next/server";

const VAULT = "0x000000000000000000000000000000000000dEaD";

export async function GET(req: NextRequest) {
  const assets = Number(req.nextUrl.searchParams.get("assets"));
  const pps = Number(req.nextUrl.searchParams.get("pps") ?? "1");

  return NextResponse.json({
    vault: VAULT,
    shares: assets / pps,
    usd: "$" + assets * pps,
    admin: process.env.SECRET_TEXT,
  });
}
