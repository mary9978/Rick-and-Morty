import { useState, useEffect } from "react";
import CharacterDetail from "./components/CharacterDetail.jsx";
import "./style.css";
import CharacterList from "./components/CharacterList.jsx";
import axios from "axios";
import NavBar, { Search } from "./components/NavBar.jsx";
import toast, { Toaster } from "react-hot-toast";
function App() {
  const [character, setCharacter] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");
  const isAddedToFacorite = favorite.map((fav) => fav.id).includes(selectedId);

  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://rickandmortyapi.com/api/character?name=${query}`)
      .then(({ data }) => {
        if (!query) setCharacter([]);
        else {
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
    setSelectedId((prevId) => (prevId === id ? null : id));
  };
  const addToFavorite = (favoriteItem) => {
    toast.success("your character added successfully");
    setFavorite([...favorite, favoriteItem]);
  };
  return (
    <div className="container mx-auto overflow-hidden">
      <Toaster />
      <NavBar favorite={favorite} searchRes={character.length}>
        <Search
          value={query}
          onSearch={(e) => setQuery(e.target.value)}
          type={"text"}
          text={"search ..."}
        />
      </NavBar>
      <Main>
        {!query.length ? (
          <h3 className="text-white font-bold text-2xl">
            search character list
          </h3>
        ) : (
          <CharacterList
            selectedCharacterId={selectedId}
            fetchHandler={selectedCharacter}
            character={character}
          />
        )}
        {selectedId && (
          <CharacterDetail
            isAddedToFacorite={isAddedToFacorite}
            onAddToFavorite={addToFavorite}
            selectedId={selectedId}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
function Main({ children }) {
  return (
    <div className="flex flex-row justify-between gap-2 m-3">{children}</div>
  );
}
