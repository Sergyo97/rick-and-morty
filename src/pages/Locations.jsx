import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loader from "../assets/loader.png";
import LocationsList from "../components/LocationsList";
import { fetchLocations } from "../store/locations-slice";

let isInitial = true;

function LocationsPage() {
  const dispatch = useDispatch();
  const { loading, locations } = useSelector((state) => state.location);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(fetchLocations());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl">Loading...</h1>
        <img src={loader} alt="loader" className="animate-spin" />
      </div>
    );
  }

  return <LocationsList locations={locations.results} />;
}

export default LocationsPage;
