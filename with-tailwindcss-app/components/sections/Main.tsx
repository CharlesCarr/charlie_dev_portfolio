import React from "react";
import ReactIcon from "components/svgs/react.svg";
import HTMLIcon from "components/svgs/html.svg";
import JavaScriptIcon from "components/svgs/javascript.svg";
import TypeScriptIcon from "components/svgs/typescript.svg";
import VercelIcon from "components/svgs/vercel.svg";
import TailwindIcon from "components/svgs/tailwind.svg";
import ReduxIcon from "components/svgs/redux.svg";
import NodeIcon from "components/svgs/node.svg";
// import Typewriter from "typewriter-effect";
import MainSub from "../MainSub";

function Main() {
  return (
    <main className="flex w-full items-center justify-center px-5 sm:px-20 mt-28 mb-28 min-h-full">
      <div className="hidden lg:block relative">
        <div className="bg-white w-16 h-16 flex justify-center items-center rounded-full absolute -top-24 right-60">
          <div className="relative">
            <div className="absolute -bottom-10 -right-8 w-28 h-28 bg-cyan-300 rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
            <ReactIcon className="text-5xl" />
          </div>
        </div>
        <div className="bg-white w-10 h-10 flex justify-center items-center rounded-full absolute -top-32 right-20">
          <div className="relative">
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-orange-400 rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
            <HTMLIcon className="text-3xl" />
          </div>
        </div>
        <div className="bg-white w-8 h-8 flex justify-center items-center rounded-full absolute -top-4 -left-32">
          <div className="relative">
            <div className="absolute -bottom-10 -right-8 w-20 h-20 bg-cyan-300 rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
            <TailwindIcon className="text-2xl" />
          </div>
        </div>
        <div className="bg-white w-14 h-14 flex justify-center items-center rounded-full absolute -bottom-24 right-44">
          <div className="relative">
            <div className="absolute -bottom-10 -right-8 w-24 h-24 bg-blue-400 rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
            <TypeScriptIcon className="text-4xl" />
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-6 text-white relative">
      <div className="absolute bottom-32 right-44 w-52 h-52 bg-cyan-400 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-hBlob animation-delay-2000"></div>
        <h1 className="text-4xl sm:text-5xl text-center tracking-widest mb-2 font-semibold">
          <a className="text-5xl sm:text-6xl">C</a>HARLIE <a className="text-5xl sm:text-6xl">C</a>ARR.
        </h1>
        <h1 className="text-xl text-center tracking-widest font-semibold">
          <a className="text-3xl">F</a>RONT <a className="text-3xl">E</a>ND{" "}
          <a className="text-3xl">D</a>EV.
        </h1>
        <MainSub />
      </div>

      <div className="relative hidden lg:block">
        <div className="bg-white w-16 h-16 flex justify-center items-center rounded-full absolute -top-24 left-60">
          <div className="relative">
            <div className="absolute -bottom-5 -right-12 w-28 h-28 bg-green-300 rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
            <NodeIcon className="text-5xl" />
          </div>
        </div>
        <div className="bg-white w-12 h-12 flex justify-center items-center rounded-full absolute -top-32 left-20">
          <div className="relative">
            <div className="absolute -bottom-5 -right-12 w-24 h-24 bg-purple-300 rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
            <ReduxIcon className="text-3xl" />
          </div>
        </div>
        <div className="bg-white w-12 h-12 flex justify-center items-center rounded-full absolute -top-4 left-14">
          <div className="relative">
            <div className="absolute -bottom-5 -right-12 w-20 h-20 bg-white rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
            <VercelIcon className="text-4xl" />
          </div>
        </div>
        <div className="bg-white w-12 h-12 flex justify-center items-center rounded-full absolute -bottom-24 left-44">
          <div className="relative">
            <div className="absolute -bottom-5 -right-12 w-24 h-24 bg-yellow-300 rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
            <JavaScriptIcon className="text-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
