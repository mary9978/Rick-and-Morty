import { useState,useEffect } from 'react'
import CharacterDetail from "./components/CharacterDetail.jsx";
import './style.css'
import CharacterList from "./components/CharacterList.jsx";
import axios from "axios";
import NavBar from "./components/NavBar.jsx";
import toast , {Toaster}  from "react-hot-toast";
function App() {
  const [character,setCharacter]=useState([]);
  const [isFetching , setIsFetching] = useState(false);
  useEffect(() => {

    setIsFetching(true);

    axios.get('https://rickandmortyapi.com/api/character')
        .then(({data})=> setCharacter(data.results.slice(0,5)))
        .catch(err => toast.error(err.message))
        .finally(()=> setIsFetching(false));

  }, []);
  return (
<>
  <Toaster />
  <NavBar />
  <Main>
    {isFetching ? <h3 style={{color:'white'}}>data is fetching ...</h3> : <CharacterList character={character}/>}
  </Main>
</>
  )
}

export default App
function Main({children}) {
 return(
     <div className="main">
       {children}
       <CharacterDetail />
     </div>
 )
}
