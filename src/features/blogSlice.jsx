import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    blogs: [],
    categories: [],
    blog:[],
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload: { url, data } }) => {
      state.loading = false;
      state[url] = data;
    },
  
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail, getBlogSuccess } =
  blogSlice.actions;
export default blogSlice.reducer;
