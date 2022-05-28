import React from "react";
import { Canvas } from "reaflow";

import Styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";

const nodes = [
  {
    id: "1",
    text: "1"
  },
  {
    id: "2",
    text: "2"
  }
];

const edges = [
  {
    id: "1-2",
    from: "1",
    to: "2"
  }
];

const Home: React.FC<Props> = props => {
  const isServer = typeof window === "undefined";

  return (
    <Styles className="Home">
      <header className="Home__header" />
      <main className="Home__main">
        {isServer ? null : (
          <Canvas maxHeight={800} nodes={nodes} edges={edges} />
        )}
      </main>
      <footer className="Home__footer" />
    </Styles>
  );
};

Home.defaultProps = {};

export default Home;
