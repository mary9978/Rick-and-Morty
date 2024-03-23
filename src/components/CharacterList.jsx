import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import axios from "axios";
function CharacterList({character,fetchHandler}) {
  return (
    <div className="character-list">
    {character.map(item =><Character fetchHandler={fetchHandler} key={item.id} item={item} />)}
    </div>
   
  );
}

export default CharacterList;
function Character({item,fetchHandler}) {
 
  return (
       <div className="character-card" >
         <div style={{'display':'flex'}}>
           <img
             width={"50px"}
             height={"50px"}
             src={item.image}
             alt={item.name}
           />
           <div className="character-info">
             <p>{item.name}</p>
             <p>{item.status} - {item.species}</p>
           </div>
         </div>
         <EyeIcon color="red" width={"25px"} onClick={()=> fetchHandler(item.id)} />
       </div>

  )
}
