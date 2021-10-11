import React from "react";
import Navbar from "../navbar/navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DefaultLayout;
