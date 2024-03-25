import React from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
function CharacterList({ character, fetchHandler, selectedCharacterId }) {
  return (
    <div className="basis-1/4">
      {character.map((item) => (
        <Character
          selectedCharacterId={selectedCharacterId}
          fetchHandler={fetchHandler}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default CharacterList;
function Character({ item, fetchHandler, selectedCharacterId }) {
  return (
    <div className="bg-slate-700 flex justify-between flex-row my-3 p-2 rounded-lg">
      <div style={{ display: "flex" }}>
        <img width={"50px"} height={"50px"} src={item.image} alt={item.name} />
        <div className="character-info">
          <p>{item.name}</p>
          <p>
            {item.status} - {item.species}
          </p>
        </div>
      </div>
      {selectedCharacterId == item.id ? (
        <EyeSlashIcon 
          color="red"
          width={"25px"}
          onClick={() => fetchHandler(item.id)}
        />
      ) : (
        <EyeIcon
          color="red"
          width={"25px"}
          onClick={() => fetchHandler(item.id)}
        />
      )}
    </div>
  );
}
