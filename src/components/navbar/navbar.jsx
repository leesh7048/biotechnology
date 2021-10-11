import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>bio</h1>
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
