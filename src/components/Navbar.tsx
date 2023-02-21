import React from "react";

const Navbar = () => {
  return (
    <section className="navbar__block row">
      <div className="navbar row">
        <img className="navbar__logo" src="NORDIC ROSE.png" alt="" />
        <div className="navbar__links row fs20 fw400">
          <span>BLOG</span>
          <span>ABOUT</span>
          <span>LINKS</span>
          <span>PROJECTS</span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
