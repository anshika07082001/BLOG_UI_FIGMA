import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogContentPage from "./BlogContentPage";
import LandingPage from "./LandingPage";

const Main = () => {
  return (
    <div className="container width">
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
