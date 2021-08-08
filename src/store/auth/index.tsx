import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const getUser = (state) => state.auth.user;
export const isSignedIn = (state) => state.auth.isLoggedIn;
export const { login, logout } = slice.actions;
export default slice.reducer;
