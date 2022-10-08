import { useState } from "react";
import {
  MoonIcon,
  SunIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/24/solid";

function Header() {
  const [lightMode, setLightMode] = useState<boolean>(false);

  return (
    <header className="sticky w-full top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10 text-slate-50 bg-zinc-600">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        {lightMode ? (
          <MoonIcon className="w-6 h-6" onClick={() => setLightMode(false)} />
        ) : (
          <SunIcon className="w-6 h-6" onClick={() => setLightMode(true)} />
        )}
        <p className="text-xs ml-5">charliecarr.dev</p>
      </div>

      <div className="flex items-center justify-center text-xs">
        <p>About</p>
        <p>-</p>
        <p>Projects</p>
        <p>-</p>
        <p>Contact</p>
      </div>

      <div className="flex items-center space-x-4 justify-end">
        <button className="text-xs border p-3">Resume</button>
        <Bars3CenterLeftIcon className="w-6 h-6" />
      </div>
    </header>
  );
}

export default Header;
