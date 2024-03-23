import axios from 'axios';
import React, { useState ,useEffect } from 'react'

function CharacterDetail({selectedId}) {
  const [selectedCharacter,setSelectedChar]=useState([]);
  useEffect(()=>{
   async function fetchData() {
    const {data} = await axios
    .get(`https://rickandmortyapi.com/api/character/${selectedId}`);
    if(selectedId){
      setSelectedChar(data);
    } 
    }
    fetchData();
  },[selectedId]);

  if(!selectedCharacter) return <h2 className='text-white'>Select Character</h2>
  return (
    <div className="character-card">
    <div style={{'display':'flex'}}>
      <img
        width={"50px"}
        height={"50px"}
        src={selectedCharacter.image}
        alt={selectedCharacter.name}
      />
      <div className="character-info">
        <p>{selectedCharacter.name}</p>
        <p>{selectedCharacter.status} - {selectedCharacter.species}</p>
      </div>
    </div>
  </div>
  )
}

export default CharacterDetail