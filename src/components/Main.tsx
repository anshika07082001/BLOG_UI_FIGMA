import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogContentPage from "./BlogContentPage";
import LandingPage from "./LandingPage";

const Main = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogContentPage/>}/>
      </Routes>
    </div>
  );
};

export default Main;
