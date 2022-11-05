import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { newPost } from "./postsSlice";

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const dispatch = useDispatch();
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        newPost({
          id: nanoid(),
          title,
          content,
          date: new Date().toISOString(),
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            dislike: 0,
          },
        })
      );
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content);
  return (
    <section className="padding">
      <h1 className="text-3xl font-bold">Add a new post</h1>
      <form className="mt-8 space-y-4">
        <label
          className="block text-gray-700 text-sm font-bold"
          htmlFor="postTitle"
        >
          Post Title:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-2 focus:shadow-md"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />

        <label
          className="block text-gray-700 text-sm font-bold"
          htmlFor="postContent"
        >
          Content:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-2 focus:shadow-md"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
        <br />
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default NewPostForm;
