import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MainBlog from "./MainBlog";

const BlogContentPage = () => {
  return (
    <>
      <Link to="/" className="link__deco">
        Navigate to Landing Page
      </Link>
      <header>
        <Navbar />
      </header>
      <main>
        <MainBlog/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default BlogContentPage;
