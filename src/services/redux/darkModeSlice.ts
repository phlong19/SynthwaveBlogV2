import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  theme: false, // light
};

const darkModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.theme = !state.theme;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
