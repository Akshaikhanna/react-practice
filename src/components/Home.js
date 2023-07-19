import React from "react";
import "./Navbar.css";
import code from "../image/code.jpg";

const Home = () => {
  return (
    <div className="home1">
      <img src={code} className="img" />
      <h2 className="head">What I do</h2>
      <p className="para">
        I'm Akshai khanna B. I'm working as a Web Developer. I design and create
        various websites. I create many designs for Web Applications and Mobile
        applications. I create the beauty of the site. I'm responsible for the
        site's technical aspects, such as its performance and capacity, which
        are measures of a website's speed and how much traffic the site can
        handle.
      </p>
      <p className="pa">
        I am a web developer from Tamil Nadu, India. I enjoy building everything
        from small business sites to rich interactive web apps. If you are a
        business seeking a web presence or an employer looking to hire, you can
        get in touch with me here. I design and build digital products with
        simple and beautiful code. I specialize in custom web theme development
        and love what I do. Since beginning my journey as a web developer in my
        college days, I'm quietly confident, naturally curious, and perpetually
        working on improving my chops one design problem at a time.
      </p>
    </div>
  );
};

export default Home;
