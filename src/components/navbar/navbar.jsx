import React from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>bio</h1>
      <ul className={styles.list}>
        <li className={styles.item}>HOME</li>
        <li className={styles.item}>RESEARCH</li>
        <li className={styles.item}>PEOPLE</li>
        <li className={styles.item}>PUBLICATIONS</li>
        <li className={styles.item}>ACTIVITIES</li>
      </ul>
    </nav>
  );
};

export default Navbar;
