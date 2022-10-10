import React from "react";

const HamburgerMenu = ({showHamMenu, setShowHamMenu}: any) => {
  return (
    <section className="fixed inset-y-0 right-0 z-50 flex">
      <div className="w-screen max-w-sm">
        <div className="flex h-full flex-col divide-y divide-gray-200 bg-gray-50">
          <div className="overflow-y-scroll">
            <header className="flex h-16 items-center justify-between pl-6">
              <span className="text-sm font-medium uppercase tracking-widest">
                Menu
              </span>

              <button
                aria-label="Close menu"
                className="h-16 w-16 border-l border-gray-200"
                type="button"
                onClick={() => setShowHamMenu(!showHamMenu)}
              >
                Close
              </button>
            </header>

            <nav className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200 text-sm font-medium text-gray-500">
              <a href="" className="px-6 py-3">
                {" "}
                Home{" "}
              </a>
              <a href="" className="px-6 py-3">
                {" "}
                About{" "}
              </a>
              <a href="" className="px-6 py-3">
                {" "}
                Projects{" "}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HamburgerMenu;
