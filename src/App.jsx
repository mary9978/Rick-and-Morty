import { useState, useEffect } from "react";
import CharacterDetail from "./components/CharacterDetail.jsx";
import "./style.css";
import CharacterList from "./components/CharacterList.jsx";
import NavBar, {
  FavoriteCharacter,
  Search,
  SearchResults,
} from "./components/NavBar.jsx";
import toast, { Toaster } from "react-hot-toast";
import useCharacter from "./hooks/useCharacter.js";
import useLocalStorage from "./hooks/useLocalStorage.js";
function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [ favorite,setFavorite] = useLocalStorage('favorite',[]);
  const [query, setQuery] = useState("");
  const isAddedToFacorite = favorite.map((fav) => fav.id).includes(selectedId);
  const {character,isFetching}  = useCharacter({query});
  
  const selectedCharacter = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };
  const addToFavorite = (favoriteItem) => {
    toast.success("your character added successfully");
    setFavorite([...favorite, favoriteItem]);
  };
  const onRemoveFavorite = (id) => {
    setFavorite(favorite.filter((item) => item.id !== id));
  };
  return (
    <div className="container mx-auto overflow-hidden">
      <Toaster />
      <NavBar>
        <Search
          value={query}
          onSearch={(e) => setQuery(e.target.value)}
          type={"text"}
          text={"search ..."}
        />
        <SearchResults numOfChar={character.length} />
        <FavoriteCharacter
          onRemoveFavorite={onRemoveFavorite}
          favorite={favorite}
        />
      </NavBar>
      <Main>
          <CharacterList
            selectedCharacterId={selectedId}
            fetchHandler={selectedCharacter}
            character={character.slice(0,5)}
          />
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
    <div className="flex items-start gap-8 m-3">{children}</div>
  );
}
