import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { GiDrippingTube } from "react-icons/gi";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1 className={styles.title}>
          Lab
          <br />
          Med
        </h1>
        {/* <img
          className={styles.logoImg}
          src={process.env.PUBLIC_URL + "/images/icon2.png"}
          height="30px"
          width="30px"
          alt="icon"
        /> */}
        <GiDrippingTube fontSize="2rem" />
      </div>

      <ul className={styles.list}>
        <Link to="/">
          <li className={styles.item}>HOME</li>
        </Link>
        <Link to="/research">
          <li className={styles.item}>RESEARCH</li>
        </Link>
        <Link to="/people">
          <li className={styles.item}>PEOPLE</li>
        </Link>
        <Link to="/publications">
          <li className={styles.item}>PUBLICATIONS</li>
        </Link>
        <Link to="/activities">
          <li className={styles.item}>ACTIVITIES</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
