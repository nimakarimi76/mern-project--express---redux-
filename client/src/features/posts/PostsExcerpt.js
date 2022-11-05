import React from "react";

import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useSelector } from "react-redux";

const PostsExcerpt = ({ post }) => {
  const users = useSelector((state) => state.auth);

  const author = users.find((user) => user.id === post.userId);

  return (
    <article className="p-3 border-2 border-blue-400 shadow-md m-9">
      <p className="text-lg font-bold">{post.title}</p>
      <p> {post.body.substring(0, 100)}</p>
      <span className="text-gray-400 text-sm">
        {post.id}

        <TimeAgo timestamp={post.date} />
      </span>

      <ReactionButtons post={post} />
      <span> By {author ? author.name : "Unknown author"}</span>
    </article>
  );
};

export default PostsExcerpt;
