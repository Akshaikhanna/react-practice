import React from "react";
import "./Navbar.css";
import { IoLogoInstagram } from "react-icons/io";
import { BsYoutube, BsTelephoneFill } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import wallpaper from "../image/wallpaper.jpg";

const Contact = () => {
  return (
    <div className="home1">
      <div>
        <h4 className="h4">Address</h4>
        <p className="address">
          5/714, Royal nagar teacher's colony, Udumalpet, India - 642126
        </p>
      </div>
      <div >
        <h4 className="contactpara">Contact</h4>
        <p className="contactpara">
          <BsTelephoneFill /> &nbsp; 6379044583
        </p>
      </div>
      <div>
        <img src={wallpaper} className="wallpaper" />
      </div>

      <div className="link">
        <a
          href="https://instagram.com/akshai_khanna?igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
          className="insta"
        >
          <IoLogoInstagram size={40} />
        </a>
        <a
          href="https://youtube.com/shorts/2CnjR1sK2EQ?feature=share"
          className="youtube"
          target="_blank"
        >
          <BsYoutube size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/akshai-khanna-b-42615a215"
          target="_blank"
          className="linkedin"
        >
          <IoLogoLinkedin size={40} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
// https://youtube.com/shorts/2CnjR1sK2EQ?feature=share
