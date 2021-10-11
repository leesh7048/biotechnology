import React from "react";
import home_img from "./img/img.jpg";
import styles from "./home.module.css";
import { FaDna } from "react-icons/fa";
import { AiOutlineExperiment } from "react-icons/ai";
import { FaBacteria } from "react-icons/fa";
import { FaHeadSideVirus } from "react-icons/fa";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <img src={home_img} className={styles.img} />
      <div className={styles.contact}>
        <div className={styles.box1}>
          <div className={styles.box1_text}>
            <h1>
              The Functional Genomics lab is a part of the Department of
              Biomedical Research at Seoul National University College of
              Medicine
            </h1>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.item}>
            <FaDna fontSize="5rem" />
            <p>이택규</p>
          </div>
          <div className={styles.item}>
            <AiOutlineExperiment fontSize="5rem" />
            <p>aaaaaaaaaaaaaaaaaaaa</p>
          </div>
          <div className={styles.item}>
            <FaBacteria fontSize="5rem" />
            <p>aaaaaaaaaaaaaaaaaaaa</p>
          </div>
          <div className={styles.item}>
            <FaHeadSideVirus fontSize="5rem" />
            <p>aaaaaaaaaaaaaaaaaaaa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
