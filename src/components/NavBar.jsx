import React, { useState } from "react";
import {HeartIcon,Bars3Icon} from '@heroicons/react/24/outline';

function NavBar({children,searchRes}) {
  return (
    <nav className="m-3">
      <div className="bg-slate-700  rounded-lg h-16 px-2 flex flex-wrap items-center justify-between">
      <h1 className="logo">LOGO :)</h1> 
      {children}
      <p className="hidden md:block">
        Found {searchRes} Results
      </p>
      <div className="hidden md:block md:relative">
      <HeartIcon  className="w-8 h-8 text-red-600 hover:cursor-pointer"/>
      <div className="flex items-center justify-center rounded-lg p-0.5 w-4 h-4 bg-red-500 absolute right-0 bottom-4">
         <span className="text-white text-xs">3</span>
      </div>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
export function Search({ type, text, onSearch, value }) {
  return (
    <input 
    className="rounded-md p-2 bg-slate-500 text-white"
    onChange={onSearch}
    value={value}
    type={type}
     placeholder={text} 
     autoFocus
     />
  )
}
