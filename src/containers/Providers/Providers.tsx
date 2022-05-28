import React, { useState } from "react";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";

import { ProvidersProps as Props } from "./Providers.types";
import { queryClientConfig } from "config/reactQuery.config";
import ThemeProvider from "contexts/theme/theme.context";

const Providers: React.FC<Props> = props => {
  const { children, dehydratedState } = props;
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <ThemeProvider>{children}</ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

Providers.defaultProps = {};

export default Providers;
