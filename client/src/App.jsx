import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";

import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-6 px-4 py-2 border-b border-b-[#000000] sticky top-0 z-10">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#212121] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>
      <main className="sm:px-8 px-4 py-8 w-full bg-[#f0ece2] min-h-[calc(100vh-73px)] overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
