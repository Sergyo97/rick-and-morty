import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    nameFilter: "",
    specieFilter: "",
    genderFilter: "",
    statusFilter: "",
  },
  reducers: {
    fillList(state, action) {
      state.items = action.payload.items;
    },
    setNameFilter(state, action) {
      state.nameFilter = action.payload.name;
    },
    setSpecieFilter(state, action) {
      state.specieFilter = action.payload.specie;
    },
    setGenderFilter(state, action) {
      state.genderFilter = action.payload.gender;
    },
    setStatusFilter(state, action) {
      state.statusFilter = action.payload.status;
    },
  },
});

export const charactersActions = charactersSlice.actions;

export default charactersSlice;
