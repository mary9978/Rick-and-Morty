import React from "react";

function NavBar({children}) {
  return (
    <div className="navbar-style">
      <h1 className="logo">LOGO :)</h1>
      {children}
      <a className="link" href="#">
        Found X Results
      </a>
      <div className="haert-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <div className="badge-div">
          <span>3</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
export function Search({ type, text, onSearch, value }) {
  console.log(value);
  return (
    <input 
    onChange={onSearch}
    value={value}
    type={type}
     placeholder={text} />
  )
}
