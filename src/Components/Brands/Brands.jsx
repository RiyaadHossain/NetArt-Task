import React from "react";
import BrandsImg from "../../Asset/Images/brands.png";
import "./Brands.css";

const Brands = () => {
  return (
    <div className="brand">
      <p className="text-center">
        INSTALLED OVER 10 LAUGHS STAR RATED PUMP SETS ACROSS THE COUNTRY
        RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
        POWER FOR THE NATION.
      </p>
      <div className="img-container">
        <img className="brand-img" src={BrandsImg} alt="" />
      </div>
      <p className="text-center">
        Valves - Pumps - Pipes - loT Drives S Controllers - Wires S Cables -
        Solar Systems - Motors
      </p>
      <div className="divider"></div>
      <h3 className="text-center mb-5">
        C.B.I. FLUID SYSTEMS PRODUCTS CAMI DIVERSE SEGMENTS
      </h3>
      <p className="text-center">
        CHEMICALS a PROCESS <span className="red-bar">|</span> POWER
        <span className="red-bar"> | </span> WATERS WASTE
        <span className="red-bar"> | </span> WATER' OILSS GAS MARNA
        <span className="red-bar"> | </span> SUGARS
        <span className="red-bar"> | </span> DISTILLERIES PAPERS PULP MARINES a
        DEFENCE <span className="red-bar">|</span> METALS MINING
        <span className="red-bar"> | </span>
        FOOD S BEVERAGE <span className="red-bar">|</span> PETROCHEMICALS
        <span className="red-bar"> | </span> REFINERIES SOLARI imam
        <span className="red-bar"> | </span> NVAC FIRE
        <span className="red-bar"> | </span> FIGHTING AGRICULTURE S RESIDENTIAL
      </p>
    </div>
  );
};

export default Brands;
