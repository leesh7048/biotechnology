import React from "react";

import styles from "./home.module.css";
import { IMAGES } from "./constant";
import Swiper from "./Swiper";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Swiper images={IMAGES} />
    </div>
  );
};

export default Home;
