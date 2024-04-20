import { useEffect,useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
export default function  useCharacter ({query}){
    const [character, setCharacter] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    useEffect(() => {
        setIsFetching(true);
        axios
          .get(`${!query.length ? 'https://rickandmortyapi.com/api/character' :`https://rickandmortyapi.com/api/character?name=${query}`}`)
          .then(({ data }) => {
              setCharacter(data.results);
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
    return {character,isFetching}  ;
}