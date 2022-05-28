import { css } from "styled-components";

const typography = css`
  body {
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.4rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
    font-weight: 400;
  }

  p {
    color: var(--palette-h0s0l0a85);
  }
`;

export default typography;
