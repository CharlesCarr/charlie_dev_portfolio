import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import RightSection from "../components/sections/RightSection";
import LeftSection from "../components/sections/LeftSection";

const Home: NextPage = () => {
  return (
    <div className="h-screen max-h-screen w-screen max-w-screen flex flex-col justify-center items-center bg-[#ced1d3]">
      <Head>
        <title>Charlie Carr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* main content */}
      <div className="w-full h-header flex justify-center items-center">
        {/* LEFT SECTION */}
        <LeftSection />
        {/* RIGHT SECTION */}
        <RightSection />
      </div>
    </div>
  );
};

export default Home;
