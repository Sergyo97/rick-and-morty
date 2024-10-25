import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharactersList from "../components/CharactersList";
import { fetchCharacters } from "../store/characters-action";
import CharactersFilters from "../components/CharactersFilters";

let isInitial = true;

function CharactersPage() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const nameFilter = useSelector((state) => state.characters.nameFilter);
  const speciesFilter = useSelector((state) => state.characters.specieFilter);
  const genderFilter = useSelector((state) => state.characters.genderFilter);
  const statusFilter = useSelector((state) => state.characters.statusFilter);
  const filter = useMemo(
    () => buildFilters(nameFilter, speciesFilter, genderFilter, statusFilter),
    [nameFilter, speciesFilter, genderFilter, statusFilter],
  );

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(fetchCharacters(filter));
  }, [dispatch, filter]);

  return (
    <div className="flex flex-col items-center gap-4">
      <CharactersFilters />
      <CharactersList characters={characters} />
    </div>
  );
}

const buildFilters = (name, species, gender, status) => {
  return {
    name,
    species,
    gender,
    status,
  };
};

export default CharactersPage;
