import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <div>
        <p className="text-3xl p-5 text-center">Post not found!</p>
      </div>
    );
  }

  return (
    <article className="p-3 border-2 border-blue-400 shadow-md m-9">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePostPage;
