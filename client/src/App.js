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

function App() {
  return (
    <main>
      <div className="bg-main-bg dark:bg-secondary-dark-bg dark:text-white navbar w-full">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
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
