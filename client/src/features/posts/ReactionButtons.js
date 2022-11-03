import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍🏻",
  dislike: "👎🏻",
  wow: "🤯",
  heart: "♥️",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const buttons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="text-emerald-900"
        onClick={() =>
          dispatch(
            reactionAdded({
              postId: post.id,
              reaction: name,
            })
          )
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{buttons}</div>;
};

export default ReactionButtons;
