import React from "react";
import { Link } from "react-router"; // Make sure this is 'react-router-dom' if using React Router v6+
import { PlusIcon } from "lucide-react";

const NavBar = () => {
  return (
    <header className="bg-gray-950 border-b border-amber-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-green-700 font-mono tracking-tight">
            ThinkBoard
          </h1>
          <div className="border border-green-400 bg-green-400 rounded-full flex items-center gap-4">
            <Link
              to={"/create"}
              className="flex items-center text-black border-none transition-opacity duration-300  gap-2 px-3 py-1"
            >
              <PlusIcon className="w-5 h-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
