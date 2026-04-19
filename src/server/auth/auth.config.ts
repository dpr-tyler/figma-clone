import type { DefaultSession, NextAuthConfig } from "next-auth";

/**
 * Edge-safe auth config (middleware). No Node-only imports.
 * Module augmentation can live here so both middleware and Node auth share types.
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authConfig = {
  providers: [],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub!,
      },
    }),
  },
} satisfies NextAuthConfig;
