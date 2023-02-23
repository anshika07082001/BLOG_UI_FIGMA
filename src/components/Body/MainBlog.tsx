import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { imageArr } from "../Images";

const MainBlog = () => {
  return (
    <>
      <section className="landing__banner column">
        <div className="banner__content container">
          <span className="banner__content--para">
            A few words about this blog platform, Ghost, and how this site was
            made
          </span>
        </div>
        <div className="banner__smallContent container">
          <span className="banner__smallPara fw400 fs20">
            Why Ghost (& Figma) instead of Medium, WordPress or other options?
          </span>
        </div>
        <img className="blog__bannerImg width" src="image 2.png" alt="" />
      </section>
      <section className="landing__content column">
        <div className="blog__block container column">
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
              <div className="vertical__line"></div>
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
              nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu
              dui molestie, molestie lectus eu, semper lectus.
            </p>
          </div>
          <p className="blog__heading fw700">Next on the pipeline</p>
          <div className="profile__para1 column">
            <p className="fs20 fw400" style={{ lineHeight: "34px" }}>
              Duis eu velit tempus erat egestas efficitur. In hac habitasse
              platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p className="fs20 fw400" style={{ lineHeight: "34px" }}>
              Morbi efficitur auctor metus, id mollis lorem pellentesque id.
              Nullam posuere maximus dui et fringilla.
            </p>
          </div>
        </div>
        <img className="blog__image" src="Rectangle 8.png" alt="" />
        <p className="image__caption fw400 fs16">
          Image caption centered this way and I’ll make this a bit longer  to
          indicate the amount of line-height.
        </p>
        <div className="profile__para1 column">
          <p className="fs20 fw400" style={{ lineHeight: "34px" }}>
            Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Aliquam quis posuere ligula.
          </p>
          <p className="fs20 fw400" style={{ lineHeight: "34px" }}>
            In eu dui molestie, molestie lectus eu, semper lectus. Proin at
            justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi
            arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id.
            Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
          </p>
        </div>
        <div className="lists row">
          <span className="fs20 fw400">A list looks like this:</span>
        </div>
        <div className="list">
          <ul>
            <li className="li">First item in the list </li>
            <li className="li">
              Second item in the list lorem ipsum dolor sit amet nunc felis
              dolor lorem ipsum sit amet
            </li>
            <li className="li">Third item in the list</li>
          </ul>
        </div>
        <div className="blog__para2">
          <span className="fw400 fs20 lh34">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula.{" "}
          </span>
        </div>
        <div className="blog__para2">
          <p className="fw400 fs20 lh34">Thanks for reading,</p>
          <p className="fw400 fs20 lh34">Mika</p>
        </div>
        <div className="social__block row">
          <div className="social__fb row">
            <FacebookRoundedIcon />
            <label className="fw400 fs16">Share on Facebook</label>
          </div>
          <div className="vertical__line line--height"></div>
          <div className="social__fb row">
            <TwitterIcon />
            <label className="fw400 fs16">Share on Twitter</label>
          </div>
        </div>
        <div className="blog__para3">
          <span className="fw500 fs16">Tags: product design, culture</span>
        </div>
        <div className="profile__div row">
          <img src="image 3.png" alt="" className="profile__div__img" />
          <p className="profile__div__content">
            <span className="fw700 fs16">MIKA MATIKAINEN </span>
            <span className="fw400 fs16">
              is a Design Founder & Advisor, Berlin School of Creative
              Leadership Executive MBA participant, Zippie advisor, Wolt
              co-founder, and Nordic Rose stakeholder.
            </span>
          </p>
        </div>
        <img src="Group 10.png" alt="" className="eye__img" />
      </section>
      <section className="landing__grid__block column">
        <div className="landing__grid__heading">
          <p className="fw700 ">What to read next</p>
        </div>
        {/* rendering of grid */}
        <div className="landing__grid">
          {imageArr.slice(0, 6).map((item) => {
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
        <div className="form__block column">
          <p className="fw700 fs36">Sign up for the newsletter</p>
          <div className="form__para">
            <span className="fw400 fs20">
              If you want relevant updates occasionally, sign up for the private
              newsletter. Your email is never shared.{" "}
            </span>
          </div>
          <div className="email__block row">
            <input className="email__input" placeholder="Enter Your Email..." />
            <button className="email__btn">SIGN UP</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBlog;
