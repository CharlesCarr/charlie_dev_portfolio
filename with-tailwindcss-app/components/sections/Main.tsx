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
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Main() {
  return (
    <main className="flex w-full flex-1 items-center justify-center px-20 mt-28 min-h-full">
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
        {/* <Typewriter
          options={{
            strings: ["CHARLIE CARR."],
            autoStart: true,
            loop: true,
          }}
        />
        <Typewriter
          options={{
            strings: ["SOFTWARE DEVELOPER."],
            autoStart: true,
            loop: true,
          }}
        /> */}
        <h1 className="text-5xl text-center tracking-widest mb-2">
          CHARLIE CARR.
        </h1>
        <h1 className="text-2xl text-center tracking-wider">FRONT END DEV.</h1>

        <div className="h-24 w-90 rounded-md bg-neutral-400 mt-24 flex justify-center items-center">
          <p className="underline">View My Projects Below</p>
          <div className="flex justify-center items-center mt-10">
            <div className="flex justify-center items-center h-10 w-10 bg-black mr-2 rounded-full">
              <FaGithub className="w-6 h-6" />
            </div>
            <div className="flex justify-center items-center h-10 w-10 bg-black rounded-full">
              <FaLinkedin className="w-6 h-6" />
            </div>
          </div>
        </div>
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
