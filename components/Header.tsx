// import { useState } from "react";
// import {
//   MoonIcon,
//   SunIcon,
//   Bars3CenterLeftIcon,
// } from "@heroicons/react/24/solid";
// import HamburgerMenu from "./HamburgerMenu";

function Header() {
  // const [lightMode, setLightMode] = useState<boolean>(false);
  // const [showHamMenu, setShowHamMenu] = useState<boolean>(false);

  return (
    <header className="flex h-16 w-full justify-between items-center px-12  border-b-black border-t-0 border-x-0 border-4 bg-[#e1e2e6]">
      {/* right header */}
      <div className="flex justify-center items-center">
        <p className="text-xl sm:text-3xl">charlie-carr.com</p>
      </div>

      {/* left header */}
      <div className="flex items-center justify-center">
        <p className="text-xs">Dark</p>
        <button className="border-2 ml-5 border-black py-1 px-3 text-base sm:text-lg">
          Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
