import { useState } from "react";
import {
  MoonIcon,
  SunIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/24/solid";

function Header() {
  const [lightMode, setLightMode] = useState<boolean>(false);

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
        <p className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-slate-50 before:transition hover:before:scale-100">About</p>
        <div className="h-1 w-1 rounded-full border-white border"></div>
        <p className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-slate-50 before:transition hover:before:scale-100">Projects</p>
        <div className="h-1 w-1 rounded-full border-white border"></div>
        <p className="cursor-pointer relative before:absolute before:-bottom-1 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-slate-50 before:transition hover:before:scale-100">Contact</p>
      </div>

      <div className="flex items-center space-x-4 justify-end">
        <button className="text-xs border p-3">Resume</button>
        <Bars3CenterLeftIcon className="w-6 h-6" />
      </div>
    </header>
  );
}

export default Header;
