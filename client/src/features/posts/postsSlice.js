import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "Find me in postsSlice ",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      dislike: 0,
    },
  },
  {
    id: "2",
    title: "Posts Slice",
    content: "I've heard good things ",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      dislike: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    newPost(state, action) {
      state.push(action.payload);
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;
//* instead we use the variable if the state structure changed in the future we just need to change the slice, not all over the project

export const { newPost, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
