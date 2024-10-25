import { Link } from "react-router-dom";

function CharacterItem({ character }) {
  return (
    <div className="max-w-[60rem] m-auto p-8 flex flex-col justify-between items-center gap-8">
      <img src={character.image} alt="image" className="rounded-full" />
      <h1 className="text-4xl">{character.name}</h1>
      <div className="flex flex-row gap-8">
        <div className="w-96">
          <h1 className="text-xl">Informations</h1>
          <div className="m-4">
            <b>Gender</b>
            <p>{character.gender}</p>
            <hr />
            <b>Status</b>
            <p>{character.status}</p>
            <hr />
            <b>Specie</b>
            <p>{character.species}</p>
            <hr />
            <b>Origin</b>
            <p>{character.origin.name}</p>
            <hr />
            <b>Type</b>
            <p>{(character.type && character.type) || "Unknown"}</p>
            <hr />
            <b>Location</b>
            <p>{character.location.name}</p>
          </div>
        </div>
        <div className="w-64">
          <h1 className="text-xl">Episodes</h1>
          <div className="m-4">{`Appearances: ${character.episode.length}`}</div>
        </div>
      </div>
    </div>
  );
}

export default CharacterItem;
