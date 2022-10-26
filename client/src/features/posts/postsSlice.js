import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "Find me in postsSlice ",
  },
  {
    id: "2",
    title: "Posts Slice",
    content: "I've heard good things ",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    newPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;
//* instead we use the variable if the state structure changed in the future we just need to change the slice, not all over the project

export const { newPost } = postsSlice.actions;

export default postsSlice.reducer;
