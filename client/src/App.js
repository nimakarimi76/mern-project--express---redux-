import React from "react";
import { Routes, Route } from "react-router";

import "./App.css";

import Navbar from "./layout/Navbar";
import Fetch from "./components/Fetch";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Counter from "./pages/Counter";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import NewPostForm from "./features/posts/NewPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";

function App() {
  return (
    <main>
      <div className="bg-main-bg dark:bg-secondary-dark-bg dark:text-white navbar w-full">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog">
          <Route index element={<Blog />} />
          <Route path="post">
            <Route index element={<NewPostForm />} />
            <Route path=":postId" element={<SinglePostPage />} />
          </Route>
        </Route>

        <Route path="/counter" element={<Counter />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
