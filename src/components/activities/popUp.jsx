import React from "react";
import { useLocation, useHistory } from "react-router";
import styles from "./popUp.module.css";
import { GrClose } from "react-icons/gr";

const PopUp = ({ closeClick, data }) => {
  const location = useLocation();

  const imgUrl = location.search.split("?imageUrl=")[1];
  const display = imgUrl ? styles.open : styles.close;

  return (
    <div className={display}>
      <div className={styles.btnBox}>
        <button className={styles.closeBtn} onClick={closeClick}>
          <GrClose />
        </button>
      </div>
      <section className={styles.section}>
        <div className={styles.imgBox}>
          <img className={styles.img} src={imgUrl} alt="img" />
        </div>
        <div className={styles.contentBox}>
          <h1>{data && data.title}</h1>
          <span>{data && data.date}</span>
          <span>{data && data.content}</span>
        </div>
      </section>
    </div>
  );
};

export default PopUp;
