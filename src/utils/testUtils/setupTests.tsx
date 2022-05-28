import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import { render as rtlRender } from "@testing-library/react";
import { RenderOptions as rtlRenderOptions } from "@testing-library/react";
import { RenderResult } from "@testing-library/react";
import React from "react";

import Layout from "components/global/Layout/Layout";
import Providers from "containers/Providers/Providers";
import themes from "styles/theme";

interface RenderOptions extends Omit<rtlRenderOptions, "queries"> {
  // Styles theme
  theme?: typeof themes.light;
}

interface WrapperProps {
  children?: React.ReactElement;
}

export const render = (
  ui: React.ReactElement,
  options: RenderOptions = {}
): RenderResult => {
  const { ...returnOptions } = options;
  // Wrapper component of the render function
  const Wrapper: React.FC<WrapperProps> = props => {
    const { children } = props;
    return (
      <Providers dehydratedState={{}}>
        <Layout>{children}</Layout>
      </Providers>
    );
  };
  // Return renderer function with base options set
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...returnOptions })
  };
};

interface Cases {
  [key: string]: string | number | boolean | undefined | null;
}

interface CasifyRes {
  name: string;
  testValue: string | number | boolean | undefined | null;
}

export const casify = (cases: Cases): CasifyRes[] => {
  return Object.entries(cases).map(([caseTitle, testValue], index: number) => {
    return {
      name: `${index + 1}. ${caseTitle} - ${testValue}`,
      testValue
    };
  });
};

export * from "@testing-library/react";
