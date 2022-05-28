import Head from "next/head";
import React from "react";
// import { GetServerSideProps } from "next";

import Home from "components/home/Home/Home";
import CONSTANTS from "config/constants";
import useI18n from "hooks/useI18n";

const { TITLE } = CONSTANTS;

interface Props {}

const HomePage = (props: Props) => {
  const t = useI18n().home;

  return (
    <>
      <Head>
        <title>
          {TITLE} | {t.meta.title}
        </title>
      </Head>
      <Home />
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async context => {
//   return {
//     props: {} // will be passed to the page component as props
//   };
// };

export default HomePage;
