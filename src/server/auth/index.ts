import NextAuth from "next-auth";
import { cache } from "react";

import { authConfig } from "./auth.config";
import { authProvidersAndAdapter } from "./config";

const {
  auth: uncachedAuth,
  handlers,
  signIn,
  signOut,
} = NextAuth({ ...authConfig, ...authProvidersAndAdapter });

const auth = cache(uncachedAuth);

export { auth, handlers, signIn, signOut };
