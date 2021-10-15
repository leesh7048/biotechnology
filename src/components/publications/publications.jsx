import React, { useState } from "react";
import styles from "./publications.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Next from "./next";
import Prev from "./prev";

const Publications = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_innerBox}>
          <h1 className={styles.title}>Publications</h1>
        </div>
      </header>
      <article>
        <Slider {...settings} className={styles.slider}>
          <div className={styles.slider_item}>
            <div className={styles.thesisBox}>
              <a
                href={process.env.PUBLIC_URL + "/assets/file.pdf"}
                target="_blank"
              >
                <img
                  className={styles.thesis}
                  src={process.env.PUBLIC_URL + "/images/thesis1.PNG"}
                  alt="thesis"
                />
              </a>
            </div>
            <span>lee,kim,asd,fff</span>
          </div>
          <div className={styles.slider_item}>
            <div className={styles.thesisBox}>
              <img
                className={styles.thesis}
                src={process.env.PUBLIC_URL + "/images/thesis1.PNG"}
                alt=""
              />
            </div>
            <span>lee,kim,asd,fff</span>
          </div>
          <div className={styles.slider_item}>
            <div className={styles.thesisBox}>
              <img
                className={styles.thesis}
                src={process.env.PUBLIC_URL + "/images/thesis1.PNG"}
                alt=""
              />
            </div>
            <span>lee,kim,asd,fff</span>
          </div>
          <div className={styles.slider_item}>
            <div className={styles.thesisBox}>
              <img
                className={styles.thesis}
                src={process.env.PUBLIC_URL + "/images/thesis1.PNG"}
                alt=""
              />
            </div>
            <span>lee,kim,asd,fff</span>
          </div>
        </Slider>
      </article>
    </main>
  );
};

export default Publications;
