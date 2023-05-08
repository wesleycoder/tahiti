import { Bucket, NextjsSite, StackContext } from "sst/constructs";

export function TahitiApp({ stack }: StackContext) {
  const bucket = new Bucket(stack, "public", {
    cors: true,
  });

  const site = new NextjsSite(stack, "tahiti-app", {
    bind: [bucket],
    path: "apps/tahiti",
    buildCommand: "pnpm run build",
  });

  stack.addOutputs({
    TahitiAppURL: site.url,
  });
}
