import { createEnv } from "@t3-oss/env-nextjs";
import { NextjsSite } from 'sst/node/site'
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app isn't
   * built with invalid env vars.
   */
  server: {
    CI: z.enum(["true", "false"]).optional(),
    NEXT_PUBLIC_NODE_ENV: z.enum(["development", "production", "test"]),
  },
  /**
   * Specify your client-side environment variables schema here.
   * For them to be exposed to the client, prefix them with `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_NODE_ENV: z.enum(["development", "production", "test"]),
  },
  /**
   * Destructure all variables from `process.env` to make sure they aren't tree-shaken away.
   */
  runtimeEnv: {
    CI: process.env.CI,
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
  },
  skipValidation: !!process.env.CI,
});
