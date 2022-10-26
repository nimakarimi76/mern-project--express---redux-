import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostList = () => {
  //   const posts = useSelector((state) => state.posts);
  //* instead we use the bellow variable if the state structure changed in the future we just need to change the slice, not in every components
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post, index) => {
    return (
      <article
        key={post.id}
        className="p-3 border-2 border-blue-400 shadow-md m-9"
      >
        <p className="text-lg font-bold">{post.title}</p>
        <p> {post.content.substring(0, 100)}</p>
        <span className="text-gray-400 text-sm"> {post.id} </span>
      </article>
    );
  });

  return (
    <section>
      <h1 className="text-3xl m-4 text-center">Posts</h1>
      {renderPosts}
    </section>
  );
};

export default PostList;
