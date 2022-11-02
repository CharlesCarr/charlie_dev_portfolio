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
    <header className="flex h-16 w-full justify-between items-center px-10 border border-black">
      {/* right header */}
      <div>
        <p className="font-bold text-lg">charlie-carr.com</p>
      </div>

      {/* left header */}
      <div className="flex items-center justify-center">
        <p className="text-xs">Dark</p>
        <button className="border ml-5 border-black py-1 px-3 text-sm">
          Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
