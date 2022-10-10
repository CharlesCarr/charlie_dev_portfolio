import { useState } from "react";
import {
  MoonIcon,
  SunIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/24/solid";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const [lightMode, setLightMode] = useState<boolean>(false);
  const [showHamMenu, setShowHamMenu] = useState<boolean>(false);

  return (
    <header className="sticky w-full top-0 z-50 grid grid-cols-3 p-5 md:px-10 text-slate-50 bg-neutral-900">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        {lightMode ? (
          <MoonIcon className="w-6 h-6" onClick={() => setLightMode(false)} />
        ) : (
          <SunIcon className="w-6 h-6" onClick={() => setLightMode(true)} />
        )}
        <p className="text-xs ml-5">charliecarr.dev</p>
      </div>

      <div className="flex items-center justify-between text-xs w-44 justify-self-center">
        <p className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-slate-50 before:transition hover:before:scale-100">
          About
        </p>
        <div className="h-1 w-1 rounded-full bg-white"></div>
        <p className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-slate-50 before:transition hover:before:scale-100">
          Projects
        </p>
        <div className="h-1 w-1 rounded-full bg-white"></div>
        <p className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-slate-50 before:transition hover:before:scale-100">
          Contact
        </p>
      </div>

      <div className="flex items-center space-x-4 justify-end">
        {/* <button className="text-xs py-3 px-6 font-semibold mr-3 tracking-wider rounded-md bg-neutral-800 shadow-2xl border">
          Resume
        </button> */}{" "}
        <a
          // href="#_"
          className="relative border-white border-2 mr-3 rounded px-5 py-2.5 overflow-hidden group bg-neutral-800 hover:bg-gradient-to-r hover:from-neutral-700 hover:to-neutral-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-neutral-500 transition-all ease-out duration-300 cursor-pointer"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative font-semibold tracking-wider text-xs">
            RESUME
          </span>
        </a>
        <Bars3CenterLeftIcon className="w-6 h-6 cursor-pointer" onClick={() => setShowHamMenu(!showHamMenu)}/>
        {showHamMenu && (
          <HamburgerMenu
            showHamMenu={showHamMenu}
            setShowHamMenu={setShowHamMenu}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
