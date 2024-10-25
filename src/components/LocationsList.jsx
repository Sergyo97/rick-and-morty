import { Paper } from "@mui/material";

function LocationsList({ locations = [] }) {
  return (
    <div className="mx-8 my-auto">
      <ul className="flex flex-wrap gap-4 justify-between">
        {locations.map((location) => (
          <li key={location.id}>
            <Paper
              sx={{ minWidth: 240, minHeight: 128 }}
              className="flex flex-col justify-center items-center gap-4"
            >
              <b>{location.name}</b>
              <p>{location.dimension}</p>
            </Paper>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocationsList;
