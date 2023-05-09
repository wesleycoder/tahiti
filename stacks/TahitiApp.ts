import type { StackContext } from "sst/constructs";
import { NextjsSite } from "sst/constructs";

export function TahitiApp({ stack }: StackContext) {
  const site = new NextjsSite(stack, "tahiti-app", {
    path: "apps/tahiti",
  });

  stack.addOutputs({
    TahitiAppURL: site.url,
  });
}
