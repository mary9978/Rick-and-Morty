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
    <div className="basis-2/4 character-card">
    <div className='flex bg-slate-800 rounded-lg'>
      <img
        className='w-48 h-48 rounded-l-lg'
        src={selectedCharacter.image}
        alt={selectedCharacter.name}
      />
      <div className="character-info p-4">
        <p className='text-2xl text-slate-400 font-bold ms-1'>{selectedCharacter.name}</p>
        <div className='flex items-center gap-2'>
        {selectedCharacter.status === 'Alive'?<div className='w-2 h-2 rounded-full bg-green-500'></div>:<div className='w-2 h-2 rounded-full bg-red-700'></div>}
        
        <span className='text-slate-300 text-base font-bold'>{selectedCharacter.status} - {selectedCharacter.species}</span>
        </div>
        <p className='text-lg text-slate-700'>Last known Location :</p>
        <p className='text-xl text-slate-400 font-bold'>{selectedCharacter?.location?.name}</p>
        <button
        className='mt-3 text-white rounded-2xl bg-slate-500 p-2'
        >Add to favorite</button>
      </div>
    </div>
    <EpisodeList episodes={episodes}/>
  </div>
  )
}

export default CharacterDetail

function EpisodeList({episodes}) {
  return(
    <div className='flex p-4 flex-col bg-slate-800 rounded-lg mt-4'>
      <p className='text-2xl text-slate-400 font-bold'>List of Episodes : </p>
      {episodes.map((ep,index) =>{
        return(
          <div key={ep.id} className='my-2 flex justify-between items-center'>
            <div className='flex gap-2 text-base text-slate-200'>
              <span>{String(index+1).padStart(2,'0')} - </span>
              <p>{ep.episode} : </p>
              <p>{ep.name.substring(0,20)+'...'}</p>
            </div>
            <div className='bg-slate-400 rounded-lg px-2 py-1'>
              {ep.air_date}
            </div>
          </div>
        )
      })}
    </div>
  )
}