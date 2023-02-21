import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";

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
        <section className="landing__banner column">
          <div className="banner__content">
            <span className="banner__content--para">
              A few words about this blog platform, Ghost, and how this site was
              made
            </span>
          </div>
          <div className="banner__smallContent">
            <span className="banner__smallPara fw400 fs20">
              Why Ghost (& Figma) instead of Medium, WordPress or other options?
            </span>
          </div>
          <img className="blog__bannerImg" src="image 2.png" alt="" />
        </section>
        <section>
          <div className="blog__block column">
            <hr />
            <div className="profile__block row">
              <div className="profile__img row">
                <img className="profile__pic" src="image 3.png" alt="" />
                <div className="profile__name column">
                  <span className="pro__name fw700">MIKA MATIKAINEN</span>
                  <span className="pro__name fw400">
                    Apr 15, 2020 · 4 min read
                  </span>
                </div>
              </div>
              <div className="profile__social row">
                <FacebookRoundedIcon />
                <TwitterIcon />
              </div>
            </div>
            <div className="profile__para1 column">
              <p className="fs20 fw400" style={{ lineHeight: "34px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
                velit tempus erat egestas efficitur. In hac habitasse platea
                dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
                pharetra quis lacus at viverra.{" "}
              </p>
              <p className="fs20 fw400" style={{ lineHeight: "34px" }}>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In
                eu dui molestie, molestie lectus eu, semper lectus.
              </p>
            </div>
            <div className="blog__heading">
                <p className='blog__head fw700'>Next on the pipeline</p>
            </div>
            <div className="profile__para2">

            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default BlogContentPage;
