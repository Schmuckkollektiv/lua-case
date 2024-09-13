import { PrismaClient } from '@lua-desk-db';

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let primsa: PrismaClient;
if (process.env.NODE_ENV == 'production') {
  primsa = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    });
  }
  primsa = global.cachedPrisma;
}

export const db = primsa;
