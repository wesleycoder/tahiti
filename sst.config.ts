import { SSTConfig } from "sst";

import { API } from "./stacks/MyStack";
import { TahitiApp } from "./stacks/TahitiApp";

export default {
  config(_input) {
    return {
      name: "platform-tahiti",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(API);
    app.stack(TahitiApp);
  },
} satisfies SSTConfig;
