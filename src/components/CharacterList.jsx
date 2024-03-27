import React from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
function CharacterList({ character, fetchHandler, selectedCharacterId }) {
  return (
    <div className="basis-2/4">
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
    <div className="character-card">
      <div className="flex gap-x-2 items-center">
        <img
          className="w-16 h-16 rounded-xl"
          src={item.image}
          alt={item.name}
        />
        <div className="character-info">
          <p className="text-slate-200 font-Nunito font-bold text-xl">
            {item.gender == "Male" ? "👱🏻‍♂️ " : "👩🏻‍🦳 "}
            {item.name}
          </p>
          <div className="flex gap-x-2 items-center">
            {item.status === "Alive" ? (
              <div className="status"></div>
            ) : (
              <div className="status bg-red-700"></div>
            )}
            <p className="font-Nunito text-lg font-semiBold text-slate-200">
              {item.status} - {item.species}
            </p>
          </div>
        </div>
      </div>
      {selectedCharacterId == item.id ? (
        <EyeSlashIcon
          className="icon text-red-500"
          onClick={() => fetchHandler(item.id)}
        />
      ) : (
        <EyeIcon
          className="icon text-red-500"
          onClick={() => fetchHandler(item.id)}
        />
      )}
    </div>
  );
}
