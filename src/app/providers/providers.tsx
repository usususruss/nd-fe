import { PropsWithChildren } from "react";

import { QueryProvider } from "./query-provider";

export const Providers = ({ children }: PropsWithChildren) => (
  <QueryProvider>{children}</QueryProvider>
);
