# TypeScript Monorepo - React & Express

A monorepo setup with a React frontend (Vite), Express backend, and shared TypeScript types.

## Structure

- \`packages/client\`: React frontend (Vite)
- \`packages/server\`: Express backend
- \`packages/shared\`: Shared TypeScript types

## Setup

1. Install pnpm: \`npm install -g pnpm\`
2. Install dependencies: \`pnpm install\`
3. Build shared package: \`pnpm --filter shared build\`

## Development

- Start frontend: \`pnpm dev:client\`
- Start backend: \`pnpm dev:server\`
- Start both: \`pnpm dev\`

## Building

- Build all: \`pnpm build\`
- Build client: \`pnpm build:client\`
- Build server: \`pnpm build:server\`

