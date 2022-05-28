import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import React from "react";

(() => {
  if (!process.env.NEXT_PUBLIC_BUGSNAG_API_KEY) return;

  Bugsnag.start({
    apiKey: process.env.NEXT_PUBLIC_BUGSNAG_API_KEY,
    plugins: [new BugsnagPluginReact()]
  });
})();

export const ErrorBoundary =
  Bugsnag.getPlugin("react")?.createErrorBoundary(React);
