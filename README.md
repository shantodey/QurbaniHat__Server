# QurbaniHat Backend Server

Production-ready backend API built with **Express.js**, **TypeScript**, **Prisma ORM**, **PostgreSQL**, and **Better-Auth**.

## Stack
- Express.js (v5)
- TypeScript
- PostgreSQL (via Prisma ORM)
- Better-Auth & JWT Authentication
- dotenv & CORS

## Setup Instructions

1. Install dependencies:
```bash
pnpm install
```

2. Generate Prisma client:
```bash
pnpm exec prisma generate
```

3. Run migrations or sync database:
```bash
pnpm exec prisma db push
```

4. Start development server:
```bash
pnpm run dev
```

## API Documentation
Detailed API Documentation including endpoints, methods, request bodies, and responses can be found in [API_DOCUMENTATION.md](./API_DOCUMENTATION.md).
