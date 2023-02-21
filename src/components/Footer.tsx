import React from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <section className="footer column">
      <Marquee>
        <div className="footer__links row">
          <span className="fw700">DIGITAL PRODUCT DESIGN</span>
          <span className="fw400">REMOTE WORK</span>
          <span className="fw700">UX DESIGN</span>
          <span className="fw400">DISTRIBUTED TEAMS</span>
          <span className="fw700">CREATIVITY</span>
          <span className="fw400">STRATEGY</span>
          <span className="fw700">SUSPENSE</span>
          <span className="fw400">GROWTH</span>
          <span className="fw700">SUSPENSE</span>
          <span className="fw400">GTH</span>
        </div>
      </Marquee>
      <img src="NORDIC ROSE WHITE.png" alt="" className="footer__logo" />
      <div className="footer__paraDiv">
        <p className="footer__para fw400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </p>
      </div>
      <div className="footer__socialLinks row">
        <span className="social__links fs16 fw400">Twitter</span>
        <span className="social__links fs16 fw400">Linkedin</span>
        <span className="social__links fs16 fw400">RSS</span>
      </div>
      <div className="copyright">
        <p className="copyright__para fw400">
          © 2012–2020 Nordic Rose Co.  All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
