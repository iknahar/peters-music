import React from "react";
import partner1 from "../../images/partners/partners1.jpg";
import partner2 from "../../images/partners/partners2.jpg";
import partner3 from "../../images/partners/partners3.jpg";
import partner4 from "../../images/partners/partners4.jpg";
import partner5 from "../../images/partners/partners5.jpg";

const Partners = () => {
  return (
    <div className="bg-dark p-5">
      <h2 className="text-center text-warning">Our Partners</h2>
      <hr className="text-center text-white w-75 mx-auto" />

      <div className="partnerContain d-flex justify-content-between mx-auto">
        <img className="partner m-4 rounded-circle" src={partner1} alt="" />
        <img className="partner m-4 rounded-circle" src={partner2} alt="" />
        <img className="partner m-4 rounded-circle" src={partner3} alt="" />
        <img className="partner m-4 rounded-circle" src={partner4} alt="" />
        <img className="partner m-4 rounded-circle" src={partner5} alt="" />
      </div>
    </div>
  );
};

export default Partners;
