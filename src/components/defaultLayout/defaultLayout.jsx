import React from "react";
import Navbar from "../navbar/navbar";
import styles from "./defaultLayout.module.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  );
};

export default DefaultLayout;
