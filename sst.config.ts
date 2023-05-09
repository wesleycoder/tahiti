import { SSTConfig } from "sst";

import { TahitiApp } from "./stacks/TahitiApp";

export default {
  config(_input) {
    return {
      name: "platform-tahiti",
      region: process.env.AWS_REGION || "us-east-2",
    };
  },
  stacks(app) {
    app.stack(TahitiApp);
  },
} satisfies SSTConfig;
