import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  async () => {
    const response = await fetch("https://rickandmortyapi.com/api/location");
    const resData = await response.json();
    return resData;
  },
);

const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    loading: false,
    locations: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.loading = false;
      state.locations = action.payload;
    });
  },
});

export const locationsActions = locationsSlice.actions;

export default locationsSlice;
