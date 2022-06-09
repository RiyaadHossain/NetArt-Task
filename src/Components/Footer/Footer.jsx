import React from "react";
import "./Footer.css";
import { BsFacebook, BsGlobe2 } from "react-icons/bs";
import { FaPhoneAlt } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer">
      <div>
        <FaPhoneAlt className="unique-icon" />
        <span>Toll-free 1800 200 1234 </span>
      </div>
      <div>
        <BsFacebook className="icon" />
        <span>www.facebook.com/cripumps</span>
      </div>
      <div>
        <BsGlobe2 className="icon" />
        <span>www.crlgroups.com</span>
      </div>
    </div>
  );
};

export default Footer;
