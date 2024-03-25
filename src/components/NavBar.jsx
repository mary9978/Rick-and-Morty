import React from "react";
import {HeartIcon} from '@heroicons/react/24/outline';
function NavBar({children,searchRes}) {
  return (
    <div className="navbar-style">
      <h1 className="logo">LOGO :)</h1>
      {children}
      <a className="link" href="#">
        Found {searchRes} Results
      </a>
      <div className="haert-icon">
        <HeartIcon />
        <div className="badge-div">
          <span>3</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
export function Search({ type, text, onSearch, value }) {
  return (
    <input 
    onChange={onSearch}
    value={value}
    type={type}
     placeholder={text} />
  )
}
