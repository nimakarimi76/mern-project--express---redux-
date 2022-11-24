import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  console.log(post);

  const users = useSelector((state) => state.auth);
  const author = users.find((user) => user.id === post.userId);

  if (!post) {
    return (
      <div>
        <p className="text-3xl p-5 text-center">Post not found!</p>
      </div>
    );
  }

  return (
    <div className="w-10/12 mx-auto">
      <article className="p-3 border-2 border-blue-400 shadow-md m-9">
        <h2 className="text-lg font-bold">{post.title}</h2>
        <p>{post.body}</p>
        <span> By {author ? author.name : "Unknown author"}</span>
        <br />
        <span className="text-gray-400 text-sm">
          <TimeAgo timestamp={post.date} />
        </span>
        <ReactionButtons post={post} />
      </article>

      <Link className="m-4 p-2 bg-slate-500 text-white" to={`/blog`}>
        Previous Page
      </Link>
      <Link
        className="m-4 p-2 bg-blue-500 text-white"
        to={`/post/edit/${post.id}`}
      >
        Edit This Post
      </Link>
    </div>
  );
};

export default SinglePostPage;
