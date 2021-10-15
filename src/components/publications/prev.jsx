import React from "react";
import styles from "./prev.module.css";
import { FiArrowLeft } from "react-icons/fi";

const Prev = ({ onClick }) => {
  return (
    <button className={styles.prev} onClick={onClick}>
      <div className={styles.icon}>
        <FiArrowLeft />
      </div>
    </button>
  );
};

export default Prev;
