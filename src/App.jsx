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
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");
  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://rickandmortyapi.com/api/character?name=${query}`)
      .then(({ data }) => {
        if(!query) setCharacter([]);
        else{
          setCharacter(data.results);
        }
      })
      .catch((err) => {
        if (query) {
          setCharacter([]);
          toast.error("character not found");
          return;
        } else {
          toast.error(err.message);
        }
      })
      .finally(() => setIsFetching(false));
  }, [query]);

  const selectedCharacter = (id) => {
    setSelectedId((prevId) => prevId === id ? null : id);
  };
  return (
    <>
      <Toaster />
      <h2 className="text-white text-3xl bg-pink-500">this is text</h2>
      <NavBar searchRes={character.length}>
        <Search
          value={query}
          onSearch={(e) => setQuery(e.target.value)}
          type={"text"}
          text={"search ..."}
        />
      </NavBar>
      <Main>
        { !query.length ? (
          <h3 style={{ color: "white" }}>search character list</h3>
        ) : (
          <CharacterList
            selectedCharacterId = {selectedId}
            fetchHandler={selectedCharacter}
            character={character}
          />
        )}
       {selectedId &&  <CharacterDetail selectedId={selectedId} />}
      </Main>
    </>
  );
}

export default App;
function Main({ children }) {
  return <div className="main">{children}</div>;
}
