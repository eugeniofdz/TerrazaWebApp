import { PrismaClient } from "../generated/prisma";

const client = (globalThis as any).prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  (globalThis as any).prisma = client;
}

export default client;
