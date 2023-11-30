import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  cookies().delete("token");
  NextResponse.json({
    success: true,
  });
}
