import { json } from "react-router-dom";
import { charactersActions } from "./characters-slice";

export const fetchCharacters = (filter) => {
  return async (dispatch) => {
    console.log(filter);

    const fetchData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character?" +
          new URLSearchParams(filter),
      );

      if (!response.ok) {
        throw json({ message: "Could not fetch characters" }, { status: 500 });
      }

      const data = await response.json();
      return data;
    };

    try {
      const characters = await fetchData();
      dispatch(charactersActions.fillList({ items: characters.results || [] }));
    } catch (error) {
      throw json({ message: error }, { status: 500 });
    }
  };
};
