import { Card, CardContent, CardMedia } from "@mui/material";
import { memo } from "react";
import { Link } from "react-router-dom";

function CharactersList({ characters }) {
  return (
    <div className="mx-8 my-auto">
      <ul className="flex flex-wrap gap-4 justify-between">
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`${character.id}`}>
              <Card sx={{ maxWidth: 300, maxHeight: 300 }}>
                <CardMedia>
                  <img
                    src={character.image}
                    alt={character.name}
                    className="h-56"
                  />
                </CardMedia>
                <CardContent>
                  <h1>{character.name}</h1>
                  <p>{character.species}</p>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(CharactersList);
