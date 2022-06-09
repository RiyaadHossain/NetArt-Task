import React from "react";
import Award from "../../Asset/Images/award.png";
import AwardReceive from "../../Asset/Images/received-honour.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-img">
        <img src={Award} alt="" />
      </div>
      <div className="banner-text">
        <h3 className="banner-title">
          C.B.I. PUMPS WINS ME NATIONAL ENERGY- CONSERVATION AWARD 2018 for the
          4th time.
        </h3>
        <ul>
          <li>
            C.R.I.'s energy-efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESI. (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel
          </li>
        </ul>
        <img className="max-width-100" src={AwardReceive} alt="" />
        <p>
          The government of India has been awarded the 'National Energy
          Conservation Award 2018. Mr G. Selvaraj, Joint Managing Director of
          C.R.I. The group received the award from Smt. Sumitra Mahajan, Speaker
          of Lok Sabha S Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
};

export default Banner;
