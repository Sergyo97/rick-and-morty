import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loader from "../assets/loader.png";
import EpisodesList from "../components/EpisodesList";
import { fetchEpisodes } from "../store/episodes-slice";

let isInitial = true;

function EpisodesPage() {
  const dispatch = useDispatch();
  const { loading, episodes } = useSelector((state) => state.episode);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(fetchEpisodes());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl">Loading...</h1>
        <img src={loader} alt="loader" className="animate-spin" />
      </div>
    );
  }

  return <EpisodesList episodes={episodes.results} />;
}

export default EpisodesPage;
