"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const better_auth_1 = require("better-auth");
const prisma_1 = require("better-auth/adapters/prisma");
const prisma_2 = __importDefault(require("./prisma"));
exports.auth = (0, better_auth_1.betterAuth)({
    baseURL: process.env.BETTER_AUTH_URL,
    trustedOrigins: process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : [],
    secret: process.env.BETTER_AUTH_SECRET,
    database: (0, prisma_1.prismaAdapter)(prisma_2.default, { provider: "postgresql" }),
    emailAndPassword: { enabled: true, requireEmailVerification: false },
    session: { expiresIn: 604800, updateAge: 86400, cookieCache: { enabled: true, maxAge: 300 } },
    user: { additionalFields: { userName: { type: "string", required: true, input: true } } },
});
