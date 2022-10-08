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
    // <div className="relative flex min-h-screen flex-col items-center justify-center py-2 bg-zinc-900 text-slate-50 opacity-95">
    <div className="bg-zinc-600 min-h-screen flex flex-col items-center">
      <div className="relative w-full h-full flex flex-col justify-start items-start">
      <Head>
        <title>Charlie Carr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Shapes for Background Gradient */}
      <div className="absolute top-52 left-24 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-44 right-44 w-52 h-52 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-24 left-80 w-32 h-32 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <Header />

      <main className="flex w-full h-full flex-1 items-center justify-center px-20 mt-52">
        <div className="relative">
          <div className="bg-white w-16 h-16 flex justify-center items-center rounded-full absolute -top-24 right-60">
            <ReactIcon className="text-5xl" />
          </div>
          <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full absolute -top-32 right-20">
            <HTMLIcon className="text-3xl" />
          </div>
          <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full absolute -top-4 -left-32">
            <TailwindIcon className="text-2xl" />
          </div>
          <div className="bg-white w-14 h-14 flex justify-center items-center rounded-full absolute -bottom-24 right-44">
            <TypeScriptIcon className="text-4xl" />
          </div>
        </div>

        <div className="flex flex-col mx-6 text-white">
          <h1 className="text-4xl">CHARLIE CARR.</h1>
          <h1 className="text-4xl">SOFTWARE DEVELOPER.</h1>
        </div>

        <div className="relative">
          <div className="bg-white w-16 h-16 flex justify-center items-center rounded-full absolute -top-24 left-60">
            <NodeIcon className="text-5xl" />
          </div>
          <div className="bg-white w-12 h-12 flex justify-center items-center rounded-full absolute -top-32 left-20">
            <ReduxIcon className="text-3xl" />
          </div>
          <div className="bg-white w-12 h-12 flex justify-center items-center rounded-full absolute -top-4 left-14">
            <VercelIcon className="text-4xl" />
          </div>
          <div className="bg-white w-12 h-12 flex justify-center items-center rounded-full absolute -bottom-24 left-44">
            <JavaScriptIcon className="text-2xl" />
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default Home;
