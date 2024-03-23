import { useState, useEffect } from "react";
import CharacterDetail from "./components/CharacterDetail.jsx";
import "./style.css";
import CharacterList from "./components/CharacterList.jsx";
import axios from "axios";
import NavBar, { Search } from "./components/NavBar.jsx";
import toast, { Toaster } from "react-hot-toast";
function App() {
  const [character, setCharacter] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [query,setQuery] = useState("");
  useEffect(() => {
    setIsFetching(true);
    console.log(`https://rickandmortyapi.com/api/character?name=${query}`);
    axios
      .get(`https://rickandmortyapi.com/api/character?name=${query}`)
      .then(({ data }) => setCharacter(data.results))
      .catch((err) => {
        if(query){
          setCharacter([]);
          toast.error('character not found');
          return;
        }
        else{
          toast.error(err.message);
        }
        
      })
      .finally(() => setIsFetching(false));
  }, [query]);
  return (
    <>
      <Toaster />
      <NavBar>
        <Search value={query} onSearch={(e)=>setQuery(e.target.value)} type={'text'} text={'search ...'}/>
      </NavBar>
      <Main>
        {isFetching ? (
          <h3 style={{ color: "white" }}>data is fetching ...</h3>
        ) : (
          <CharacterList character={character} />
        )}
      </Main>
    </>
  );
}

export default App;
function Main({ children }) {
  return (
    <div className="main">
      {children}
      <CharacterDetail />
    </div>
  );
}
