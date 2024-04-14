import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";

function NavBar({ children }) {
  return (
    <nav className="m-3">
      <div className="nav-style">
        <h1 className="text-slate-300 font-Nunito font-bold">LOGO 😍</h1>
        {children}
      </div>
    </nav>
  );
}

export default NavBar;
export function Search({ type, text, onSearch, value }) {
  return (
    <input
      className="search-input"
      onChange={onSearch}
      value={value}
      type={type}
      placeholder={text}
      autoFocus
    />
  );
}
export function SearchResults({ numOfChar }) {
  return (
    <p className="text-slate-400 font-Nunito">Found {numOfChar} Results</p>
  );
}
export function FavoriteCharacter({...props}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="relative">
      <HeartIcon
        onClick={() =>props.favorite.length !== 0 && setIsOpenModal(true)}
        className="icon"
      />
      <div className="badge-style">
        <span className="text-white text-xs">{props.favorite.length}</span>
      </div>
  
        <Modal
          isOpenModal={isOpenModal}
          onRemoveFavorite={props.onRemoveFavorite}
          favoriteItem={props.favorite}
          onClose={() => setIsOpenModal(false)}
        />
 
    </div>
  );
}
