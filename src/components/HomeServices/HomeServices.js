import React, { useEffect, useState } from "react";
import "./HomeServices.css";

const HomeServices = () => {
  const [homeservices, setHomeServices] = useState([]);

  useEffect(() => {
    fetch("./data-4.JSON")
      .then((res) => res.json())
      .then((data4) => setHomeServices(data4));
  }, []);
  return (
    <div className="bg-dark p-5">
      <h2 className="text-center text-warning">Our Services</h2>
      <hr className="text-center text-white w-75 mx-auto" />

      <div className="d-flex flex-wrap justify-content-around ">
        {homeservices.map((homeservice) => {
          return (
            <div className="my-4 cardbg card" key={homeservice.id}>
              <div className="homeCard row no-gutters">
                <div className="col-md-5 pe-0 home-card-image-div">
                  <img
                    src={homeservice.img}
                    className="home-card-image"
                    alt="..."
                  />
                </div>

                <div className=" col-md-7 home-card-body p-4">
                  <h5 className="card-title text-warning mt-1">
                    {homeservice.name}
                  </h5>
                  <p className="card-text description">
                    {homeservice.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeServices;
