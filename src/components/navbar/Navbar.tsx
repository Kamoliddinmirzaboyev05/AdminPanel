import React from "react";
import "./Navbar.css";
import { FiBell, FiMoon, FiSidebar } from "react-icons/fi";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-navBg backdrop-blur-md px-4 z-10">
      <div className="navContainer">
        <div className="logo flex items-center gap-3">
          <div className="logoImg w-8 h-8">
            <img src="/public/logo.svg" alt="" />
          </div>
          <div className="logoText">

          <h2 className="font-bold text-xl">JoyBor</h2>
          <p className="text-xs text-gray-500">Admin panel</p>
          </div>
        </div>
        <div className="navRight flex items-center gap-6">
          <div className="navBtns flex items-center gap-4">
            <button className="navBts rounded-md p-2 bg-gray-100 hover:bg-gray-400 transition-all">
              <FiSidebar />
            </button>
            <button className="navBts rounded-md p-2 bg-gray-100 hover:bg-gray-400 transition-all">
              <FiMoon />
            </button>
            <button className="navBts rounded-md p-2 bg-gray-100 hover:bg-gray-400 transition-all">
              <FiBell />
            </button>
          </div>
          <div>
            <div className="profile bg-gray-100 p-2 rounded-md flex items-center gap-2">
              <div className="profileImg w-8 h-8 rounded-full border-2  overflow-hidden bg-accent flex items-center justify-center text-black font-bold">
               <h2>A</h2>
              </div>
              <div className="profileInfo">
                <h4 className="font-semibold text-sm">John Doe</h4>
                <p className="text-sm text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
