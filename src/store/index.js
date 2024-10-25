import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./characters-slice";
import locationsSlice from "./locations-slice";
import episodesSlice from "./episodes-slice";

const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    location: locationsSlice.reducer,
    episode: episodesSlice.reducer,
  },
});

export default store;
