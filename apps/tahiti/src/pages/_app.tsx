import type { AppType } from "next/app";
import "../styles/globals.css";

import { api } from "~/utils/api";

const MyApp: AppType<{ session: null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
