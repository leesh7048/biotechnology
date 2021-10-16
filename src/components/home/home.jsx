import React from "react";
import home_img from "./img/img.jpg";
import styles from "./home.module.css";
import { FaDna } from "react-icons/fa";
import { AiOutlineExperiment } from "react-icons/ai";
import { FaBacteria } from "react-icons/fa";
import { BiDonateBlood } from "react-icons/bi";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <img src={home_img} className={styles.img} />
      <div className={styles.contact}>
        <div className={styles.box1}>
          <div className={styles.box1_text}>
            <h1>Yonsei medical Genomics laboratory</h1>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.item}>
            <FaDna fontSize="5rem" />
            <p>Genomics</p>
          </div>
          <div className={styles.item}>
            <AiOutlineExperiment fontSize="5rem" />
            <p>NGS</p>
          </div>
          <div className={styles.item}>
            <FaBacteria fontSize="5rem" />
            <p>Metagenome</p>
          </div>
          <div className={styles.item}>
            <BiDonateBlood fontSize="5rem" />
            <p>Liquid biopsy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
