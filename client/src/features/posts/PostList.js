import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";

import PostsExcerpt from "./PostsExcerpt";

const PostList = () => {
  const dispatch = useDispatch();

  //   const posts = useSelector((state) => state.posts);
  //* instead we use the bellow variable if the state structure changed in the future we just need to change the slice, not in every components
  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postStatus === "succeeded") {
    content = posts.map((post) => {
      return <PostsExcerpt key={post.id} post={post} />;
    });
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h1 className="text-3xl m-4 text-center">Posts</h1>
      {content}
    </section>
  );
};

export default PostList;
