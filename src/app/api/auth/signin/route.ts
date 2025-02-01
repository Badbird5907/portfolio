import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { sign } from "@/util/server/auth";

export const POST = async (req: Request) => {
  const token = (await req.json()).password;
  const expectedToken = process.env.TOKEN;
  if (token === expectedToken) {
    const { JWT_SECRET } = process.env;
    const newToken = await sign(
      {
        timestamp: Date.now(),
      },
      JWT_SECRET as string
    );

    (await cookies()).set("token", `${newToken}`, {
      httpOnly: true,
    });
    return NextResponse.json({ success: true, token: newToken });
  }
  return NextResponse.json({ success: false });
};
