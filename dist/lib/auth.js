import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    trustedOrigins: process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : [],
    secret: process.env.BETTER_AUTH_SECRET,
    database: prismaAdapter(prisma, { provider: "postgresql" }),
    emailAndPassword: { enabled: true, requireEmailVerification: false },
    session: { expiresIn: 604800, updateAge: 86400, cookieCache: { enabled: true, maxAge: 300 } },
    user: { additionalFields: { userName: { type: "string", required: true, input: true } } },
});
