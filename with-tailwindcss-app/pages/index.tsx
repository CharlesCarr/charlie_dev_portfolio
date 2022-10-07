import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

import ReactIcon from "components/svgs/react.svg";
import HTMLIcon from "components/svgs/html.svg";
import JavaScriptIcon from "components/svgs/javascript.svg";
import TypeScriptIcon from "components/svgs/typescript.svg";
import VercelIcon from "components/svgs/vercel.svg";
import TailwindIcon from "components/svgs/tailwind.svg";
import ReduxIcon from "components/svgs/redux.svg";
import NodeIcon from "components/svgs/node.svg";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-zinc-900 text-slate-50 opacity-95">
      <Head>
        <title>Charlie Carr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex w-full flex-1 items-center justify-center px-20">
        <div className="grid grid-cols-2">
          <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full">
            <ReactIcon className="text-3xl" />
          </div>
          <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full">
            <HTMLIcon className="text-3xl" />
          </div>
          <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full">
            <JavaScriptIcon className="text-3xl" />
          </div>
          <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full">
            <TailwindIcon className="text-3xl" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl">CHARLIE CARR.</h1>
          <h1 className="text-3xl">SOFTWARE DEVELOPER.</h1>
        </div>

        <div className="grid grid-cols-2">
          <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full">
            <TypeScriptIcon className="text-3xl" />
          </div>
          <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full">
            <ReduxIcon className="text-3xl" />
          </div>
          <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full">
            <VercelIcon className="text-3xl" />
          </div>
          <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full">
            <NodeIcon className="text-3xl" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
