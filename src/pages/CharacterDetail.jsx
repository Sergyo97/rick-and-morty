import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import CharacterItem from "../components/CharacterItem";

function CharacterDetailPage() {
  const { character } = useLoaderData();

  return (
    <Suspense
      fallback={
        <div className="flex flex-col justify-center items-center">
          <h1>Loading...</h1>
          <img src="../assets/loader.png" alt="loader" />
        </div>
      }
    >
      <Await resolve={character}>
        {(loadedCharacter) => <CharacterItem character={loadedCharacter} />}
      </Await>
    </Suspense>
  );
}

export default CharacterDetailPage;

async function loadCharacter(characterId) {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/" + characterId,
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      },
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

export async function loader({ request, params }) {
  const id = params.characterId;

  return defer({
    character: await loadCharacter(id),
  });
}
