import { Paper } from "@mui/material";

function EpisodesList({ episodes = [] }) {
  return (
    <div className="mx-8 my-auto">
      <ul className="flex flex-wrap gap-4 justify-between">
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Paper
              sx={{ minWidth: 300, minHeight: 128 }}
              className="flex flex-col justify-center items-center gap-3"
            >
              <b>{episode.name}</b>
              <p>{episode.air_date}</p>
              <b>{episode.episode}</b>
            </Paper>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EpisodesList;
