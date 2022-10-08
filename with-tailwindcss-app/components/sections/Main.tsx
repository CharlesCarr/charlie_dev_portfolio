import React from "react";
import ReactIcon from "components/svgs/react.svg";
import HTMLIcon from "components/svgs/html.svg";
import JavaScriptIcon from "components/svgs/javascript.svg";
import TypeScriptIcon from "components/svgs/typescript.svg";
import VercelIcon from "components/svgs/vercel.svg";
import TailwindIcon from "components/svgs/tailwind.svg";
import ReduxIcon from "components/svgs/redux.svg";
import NodeIcon from "components/svgs/node.svg";

function Main() {
  return (
    <main className="flex w-full flex-1 items-center justify-center px-20 mt-52 min-h-full">
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
  );
}

export default Main;