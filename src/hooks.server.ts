import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "$lib/prisma.server";

export const handle = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "database",
    generateSessionToken: () => {
      return crypto.randomUUID(); // generate a uuid
    },
  },
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
});
