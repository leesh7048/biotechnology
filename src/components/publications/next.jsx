import React from "react";
import styles from "./next.module.css";
import { FiArrowRight } from "react-icons/fi";

const Next = ({ onClick }) => {
  return (
    <button className={styles.next} onClick={onClick}>
      <div className={styles.icon}>
        <FiArrowRight />
      </div>
    </button>
  );
};

export default Next;
