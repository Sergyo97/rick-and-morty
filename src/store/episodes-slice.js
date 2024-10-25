import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEpisodes = createAsyncThunk(
  "episodes/fetchLocations",
  async () => {
    const response = await fetch("https://rickandmortyapi.com/api/episode");
    const resData = await response.json();
    return resData;
  },
);

const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    loading: false,
    episodes: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEpisodes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEpisodes.fulfilled, (state, action) => {
      state.loading = false;
      state.episodes = action.payload;
    });
  },
});

export const locationsActions = episodesSlice.actions;

export default episodesSlice;
