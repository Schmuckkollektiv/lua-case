import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { v4 as uuid } from 'uuid';
import { db } from './db';

import { encode as defaultEncode } from 'next-auth/jwt';

const adapter = PrismaAdapter(db);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter,
  jwt: {
    encode: async function (params) {
      console.log('jwt encode', params);
      if (params.token?.credentials) {
        const sessionToken = uuid();

        if (!params.token.sub) {
          throw new Error('No user ID found in token');
        }
        const createdSession = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        });
        if (!createdSession) {
          throw new Error('Failed to create session');
        }

        return sessionToken;
      }
      return defaultEncode(params);
    },
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === 'credentials') {
        token.credentials = true;
      }
      return token;
    },
  },

  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = db.user.findFirst({
          where: {
            email: credentials.username as string,
          },
        });

        if (!user) {
          throw new Error('User not found.');
        }

        return user;
      },
    }),
  ],
});
