import React from "react";
import { XCircleIcon,TrashIcon } from "@heroicons/react/24/outline";
function Modal({ favoriteItem, onClose,onRemoveFavorite }) {
  return (
    <div
      className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-0 z-50 justify-center
    items-center w-full md:inset-0 h-[calc(100% - 1rem)] max-h-full "
    >
      <div className="absolute p-4 w-full max-w-md max-h-full left-[30%] top-[30%]">
        <div className="relative bg-slate-800 rounded-lg shadow p-4">
          <div className="flex justify-between items-center">
            <p className="text-xl text-slate-400 font-bold mb-0">
              List of Favorites character
            </p>
            <XCircleIcon 
            onClick={onClose}
            className="w-6 h-6 text-slate-400 hover:cursor-pointer" />
          </div>
          <div class="p-4 md:p-5 text-center">
            {favoriteItem.map((favorite) => {
              return (
                <div className="bg-slate-700 flex items-center justify-between flex-row my-3 p-2 rounded-lg">
                  <div className="flex gap-x-2">
                    <img
                      className="rounded-md"
                      width={"50px"}
                      height={"50px"}
                      src={favorite.image}
                      alt={favorite.name}
                    />
                    <div className="character-info">
                      <p>{favorite.name}</p>
                      <p>
                        {favorite.status} - {favorite.species}
                      </p>
                    </div>
                  </div>
                  <TrashIcon
                   onClick={()=>onRemoveFavorite(favorite.id)}
                   className="w-5 h-5 text-red-600 hover:cursor-pointer"/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
