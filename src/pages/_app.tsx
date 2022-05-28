import { AppProps as Props } from "next/app";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import Error from "components/error/Error/Error";
import Layout from "components/global/Layout/Layout";
import { ErrorBoundary as BugsnagErrorBoundary } from "config/bugsnag.config";
import Providers from "containers/Providers/Providers";

declare global {
  interface Window {
    Cypress: boolean;
  }
}

const App: React.FC<Props> = props => {
  const { Component, pageProps } = props;

  const app = (
    <Providers dehydratedState={pageProps.dehydratedState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );

  if (!BugsnagErrorBoundary) {
    return <ErrorBoundary FallbackComponent={Error}>{app}</ErrorBoundary>;
  }

  return <BugsnagErrorBoundary>{app}</BugsnagErrorBoundary>;
};

export default App;
