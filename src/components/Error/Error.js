import React from "react";
import errorImage from "../../images/error.jpg";

const Error = () => {
  return (
    <div
      style={{
        height: "75vh",
        background: `url(${errorImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default Error;
