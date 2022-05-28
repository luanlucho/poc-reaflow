import { lighten } from "polished";

const primary = "hsla(357, 96%, 65%, 1)";

const palette = {
  primary,
  primaryLight: lighten(0.3, primary),
  h0s0l100: "hsla(0, 0%, 100%,1)",
  h0s0l98: "hsla(0, 0%, 98%,1)",
  h0s0l45: "hsla(0, 0%, 45%,1)",
  h0s0l75: "hsl(0, 0%, 75%,1)",
  h0s0l15: "hsl(0, 0%, 15%, 1)",
  h0s0l0: "hsl(0, 0%, 0%, 1)",
  h0s0l0a85: "hsla(0, 0%, 0%, 0.85)"
};

export const columns = 12;

export const columnsMaxTotalWidth = "120rem";

export const gridMinMargin = "1.6rem";

export const gridTotalMinMargin = `calc(${gridMinMargin} * 2)`;

export const gridMargin = `minmax(${gridMinMargin}, 1fr)`;

export const columnsTotalWidth = `calc(100% - ${gridTotalMinMargin})`;

export const columnMaxWidth = `calc(${columnsMaxTotalWidth} / ${columns})`;

export const columnWidth = `minmax(0, min(calc(${columnsTotalWidth} / ${columns}), ${columnMaxWidth}))`;

const sizes = {
  page: {
    minWidth:
      "calc(100vw - (100vw - 100%) - env(safe-area-inset-left) - env(safe-area-inset-right))",
    maxWidth:
      "calc(100vw - (100vw - 100%) - env(safe-area-inset-left) - env(safe-area-inset-right))",
    minHeight:
      "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
    maxHeight:
      "calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))",
    columnsMax: "minmax(1.6rem, 1fr) minmax(0, 144rem) minmax(1.6rem, 1fr)",
    columns: `[start] ${gridMargin} [content-start] repeat(${columns}, ${columnWidth}) [content-end] ${gridMargin} [end]`,
    columnsMin: "1fr minmax(0, 120rem) 1fr"
  }
};

const variables = { palette, sizes };
export default variables;
