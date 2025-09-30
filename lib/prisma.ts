import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prismaSingleton = new PrismaClient().$extends(withAccelerate())

const globalForPrisma = globalThis as unknown as {
  prisma?: typeof prismaSingleton
}

export const prisma = globalForPrisma.prisma ?? prismaSingleton

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
