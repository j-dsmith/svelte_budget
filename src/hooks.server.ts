import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/sveltekit/providers/github";
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private";
import prisma from "$lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const handle = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
});
