import { Bucket, NextjsSite, StackContext } from "sst/constructs";

export function TahitiApp({ stack }: StackContext) {
  const site = new NextjsSite(stack, "tahiti-app", {
    path: "apps/tahiti",
  });

  stack.addOutputs({
    TahitiAppURL: site.url,
  });
}
