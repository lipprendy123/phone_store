import { PrismaClient } from "@prisma/client"

let prisma: PrismaClient | undefined = globalThis.prisma;

declare const globalThis: {
    prisma: PrismaClient
}


if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
} else {
    if (!globalThis.prisma) {
        globalThis.prisma = new PrismaClient()
    }

    prisma = globalThis.prisma
}

export default prisma