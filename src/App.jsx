import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CharacterDetailPage, {
  loader as characterLoader,
} from "./pages/CharacterDetail";
import CharactersPage from "./pages/Characters";
import EpisodesPage from "./pages/Episodes";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import LocationsPage from "./pages/Locations";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "characters", element: <CharactersPage /> },
      {
        path: "characters/:characterId",
        element: <CharacterDetailPage />,
        loader: characterLoader,
      },
      {
        path: "locations",
        element: <LocationsPage />,
      },
      { path: "episodes", element: <EpisodesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
