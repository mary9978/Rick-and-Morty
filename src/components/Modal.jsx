import React from "react";
import { XCircleIcon,TrashIcon } from "@heroicons/react/24/outline";
function Modal({ isOpenModal,favoriteItem, onClose,onRemoveFavorite }) {
  return (
    isOpenModal &&
    <div className='backdrop-blur-sm fixed left-0 top-0 z-50
     w-full h-screen bg-slate-800 bg-opacity-30'>
        <div className='fixed left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2
        rounded-lg bg-slate-700 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto p-2'>

         <div className="flex justify-between items-center">
         <p className="text-xl text-slate-400 font-bold mb-0">
              List of Favorites character
         </p>
         <XCircleIcon 
            onClick={onClose}
            className="w-6 h-6 text-slate-400 hover:cursor-pointer" />
         </div>
         <div>
          {favoriteItem.map(item =>{
            return(
              <div className="bg-slate-600 display justify-between flex-row my-3 p-2 rounded-lg">
              <div className="flex gap-x-2">
                <img
                  className="rounded-md"
                  width={"50px"}
                  height={"50px"}
                  src={item.image}
                  alt={item.name}
                />
                <div className="character-info">
                  <p>{item.name}</p>
                  <p>
                    {item.status} - {item.species}
                  </p>
                </div>
              </div>
              <TrashIcon
               onClick={()=>onRemoveFavorite(item.id)}
               className="w-5 h-5 text-red-600 hover:cursor-pointer"/>
            </div>
            )
           
          })}
         </div>

        </div>
     </div>
   
  );
}

export default Modal;
