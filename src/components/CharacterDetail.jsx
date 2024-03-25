import axios from 'axios';
import React, { useState ,useEffect } from 'react'

function CharacterDetail({selectedId}) {
  const [selectedCharacter,setSelectedChar]=useState([]);
  const [episodes,setEpisodes] = useState([]);
  useEffect(()=>{
   async function fetchData() {
    const {data} = await axios
    .get(`https://rickandmortyapi.com/api/character/${selectedId}`);
    if(selectedId){
      setSelectedChar(data);
    } 
    const episodesId = data.episode.map(e => e.split('/').at(-1));
     axios.get(`https://rickandmortyapi.com/api/episode/${episodesId}`)
     .then(({data}) => setEpisodes(data));   
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
    <EpisodeList episodes={episodes}/>
  </div>
  )
}

export default CharacterDetail

function EpisodeList({episodes}) {
  console.log(episodes);
  return(
    <div className='text-white'>Episodes List</div>
  )
}