import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { GiDrippingTube } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.title}>
          Lab
          <br />
          Med
        </span>
        <GiDrippingTube fontSize="2rem" />
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">HOME</Link>
        </li>
        <li className={styles.item}>
          <Link to="/research">RESEARCH</Link>
        </li>
        <li className={styles.item}>
          <Link to="/people">PEOPLE</Link>
        </li>

        <li className={styles.item}>
          <Link to="/publications">PUBLICATIONS</Link>
        </li>

        <li className={styles.item}>
          <Link to="/activities">ACTIVITIES</Link>
        </li>

        <li className={styles.item}>
          <Link to="/information">INFORMATION </Link>
        </li>
      </ul>
      <button className={styles.toggleBtn}>
        <FiMenu />
      </button>
    </nav>
  );
};

export default Navbar;
