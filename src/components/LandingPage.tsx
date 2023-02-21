import React from "react";
import Navbar from "./Navbar";
import { imageArr } from "./Images";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Link to="/blog" className="link__deco">
        Navigate to Blog Page
      </Link>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="banner__block">
          <img className="banner__img" src="image 2.png" alt="" />
          <div className="banner__content">
            <span className="banner__content--para fw700">
              A few words about this blog platform, Ghost, and how this site was
              made
            </span>
          </div>
          <div className="banner__smallContent">
            <span className="banner__smallPara fw400 fs20">
              Why Ghost (& Figma) instead of Medium, WordPress or other options?
            </span>
            <hr style={{ marginTop: "20px" }} />
          </div>
        </section>
        <section className="grid__block">
          <div className="grid__heading">
            <span className="grid__headPara fw700">All articles</span>
          </div>
          <div className="grids">
            {imageArr.map((item) => {
              return (
                <div className="grids__blocks column">
                  <img src={item.img} alt="" />
                  <div className="gridcontent__div">
                    <span className="grids__para fw400">{item.content}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LandingPage;
