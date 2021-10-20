import React from "react";
import { useLocation } from "react-router";
import styles from "./popUp.module.css";
import { GrClose } from "react-icons/gr";

const PopUp = ({ closeClick }) => {
  const location = useLocation();

  const imgUrl = location.search.split("?imageUrl=")[1];

  const display = imgUrl ? styles.open : styles.close;

  return (
    <div className={display}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={imgUrl} alt="img" />
      </div>
      <div className={styles.btnBox}>
        <button className={styles.closeBtn} onClick={closeClick}>
          <GrClose />
        </button>
      </div>
    </div>
  );
};

export default PopUp;
