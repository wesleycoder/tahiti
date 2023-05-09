import type { AppRouter } from "@platform-tahiti/api";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import superjson from "superjson";
import { env } from '../env.mjs'

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  // if (env.NEXT_PUBLIC_TAHITI_APP_URL) return `https://${env.NEXT_PUBLIC_TAHITI_APP_URL}`; // SSR should use production url

  return `http://localhost:3000`; // dev SSR should use localhost
};

export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (opts) =>
            env.NEXT_PUBLIC_NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: false,
});

export { type RouterInputs, type RouterOutputs } from "@platform-tahiti/api";
