import React from "react";

import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
  const users = useSelector((state) => state.auth);

  const author = users.find((user) => user.id === post.userId);

  return (
    <article className="p-3 border-2 border-blue-400 shadow-md m-9">
      <p className="text-lg font-bold">{post.title}</p>
      <p className="excerpt"> {post.body.substring(0, 75)}...</p>
      <Link to={`post/${post.id}`} className="underline">
        Read more
      </Link>
      <br />
      <span> By {author ? author.name : "Unknown author"}</span>
      <br />
      <span className="text-gray-400 text-sm">
        <TimeAgo timestamp={post.date} />
      </span>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
