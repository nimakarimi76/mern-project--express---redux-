import React from "react";
import NewPostForm from "../features/posts/NewPostForm";
import PostList from "../features/posts/PostList";

function Blog() {
  return (
    <div>
      <NewPostForm />
      <PostList />
    </div>
  );
}

export default Blog;
