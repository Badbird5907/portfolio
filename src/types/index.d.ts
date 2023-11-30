import { PrismaClient } from "@prisma/client";

declare global {
  interface Window {
    captchaToken: string;
  }

  var prisma: PrismaClient;
}
export {};
