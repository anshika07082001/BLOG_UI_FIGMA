import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogContentPage from "./Body/BlogContentPage";
import LandingPage from "./Body/LandingPage";

const Main = () => {
  return (
    <div className="container">
      <Routes>
        {/* rendering of Landing Page component */}
        <Route path="/" element={<LandingPage />} />
        {/* rendering of Blog page component */}
        <Route path="/blog" element={<BlogContentPage />} />
      </Routes>
    </div>
  );
};

export default Main;
