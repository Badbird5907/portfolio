import { jwtVerify, SignJWT } from "jose";

export const verifyToken = async (token: string | undefined) => {
  if (!token) {
    return false;
  }
  const { JWT_SECRET } = process.env;
  if (!JWT_SECRET) {
    return false;
  }
  try {
    return await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
  } catch (err) {
    console.error(err);
    return false;
  }
};

export async function sign(payload: any, secret: string): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24 * 7; // 7 days
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(secret));
}
