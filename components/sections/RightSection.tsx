// import React from "react";
// import ReactIcon from "components/svgs/react.svg";
// import HTMLIcon from "components/svgs/html.svg";
// import JavaScriptIcon from "components/svgs/javascript.svg";
// import TypeScriptIcon from "components/svgs/typescript.svg";
// import VercelIcon from "components/svgs/vercel.svg";
// import TailwindIcon from "components/svgs/tailwind.svg";
// import ReduxIcon from "components/svgs/redux.svg";
// import NodeIcon from "components/svgs/node.svg";
// import MainSub from "../MainSub";
import { useState } from "react";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";

function RightSection() {
  const [filterState, setFilterState] = useState<string>("Latest Projects");
  console.log(filterState);

  
  return (
    <main className="w-3/4 h-full flex flex-col p-6">
      <div className="flex justify-center items-end w-full h-16">
        <ul className="m-0 p-0 w-full flex justify-start items-end pl-5 pb-2 text-3xl">
          <li className={`${filterState === 'Latest Projects' ? 'border-b-4 border-black font-bold' : 'font-light'} mr-16 cursor-pointer`} onClick={(e: any) => setFilterState(e.target.innerText)}>Latest Projects</li>
          <li className={`${filterState === 'Skillset' ? 'border-b-4 border-black font-bold' : 'font-light'} mr-16 cursor-pointer`} onClick={(e: any) => setFilterState(e.target.innerText)}>Skillset</li>
          <li className={`${filterState === 'About' ? 'border-b-4 border-black font-bold' : 'font-light'} mr-16 cursor-pointer`} onClick={(e: any) => setFilterState(e.target.innerText)}>About</li>
        </ul>
      </div>

      <div className="w-full h-main mt-5 flex justify-around items-center p-6">

        {/* Component for Projects State */}
        {filterState === 'Latest Projects' && <ProjectsSection />}
        {/* Component for Skillset State */}
        {filterState === 'Skillset' && <SkillsSection />}
        {/* Component for About State */}
        {filterState === 'About' && <AboutSection />}
        
      </div>
    </main>
  );
}

export default RightSection;

{
  /* <div className="hidden lg:block relative">
<div className="bg-white w-16 h-16 flex justify-center items-center rounded-full absolute -top-24 right-60">
  <div className="relative">
    <div className="absolute -bottom-10 -right-8 w-20 h-20 bg-cyan-300 rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
    <ReactIcon className="text-5xl" />
  </div>
</div>
<div className="bg-white w-10 h-10 flex justify-center items-center rounded-full absolute -top-32 right-20">
  <div className="relative">
    <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-orange-400 rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
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
    <div className="absolute -bottom-10 -right-8 w-20 h-20 bg-blue-400 rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
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
    <div className="absolute -bottom-5 -right-12 w-20 h-20 bg-green-300 rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
    <NodeIcon className="text-5xl" />
  </div>
</div>
<div className="bg-white w-12 h-12 flex justify-center items-center rounded-full absolute -top-32 left-20">
  <div className="relative">
    <div className="absolute -bottom-5 -right-12 w-20 h-20 bg-purple-300 rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
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
    <div className="absolute -bottom-5 -right-12 w-20 h-20 bg-yellow-300 rounded-full mix-blend-lighten filter blur-xl opacity-20"></div>
    <JavaScriptIcon className="text-2xl" />
  </div>
</div>
</div> */
}
