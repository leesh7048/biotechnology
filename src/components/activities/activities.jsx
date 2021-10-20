import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import styles from "./activities.module.css";
import { IMGURL } from "./imgURL";
import PopUp from "./popUp";

const Activities = (props) => {
  const history = useHistory();

  const [isPopupMode, setIsPopupMode] = useState(false);
  const { search } = useLocation();

  const query = search.split("?imageUrl=")[1];

  useEffect(() => {
    if (isPopupMode) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isPopupMode]);

  useEffect(() => {
    if (query) {
      setIsPopupMode(true);
    } else {
      setIsPopupMode(false);
    }
  }, [query]);

  const imgClick = (event) => {
    const imgSrc = event.currentTarget.src;

    history.push(`/activities?imageUrl=${imgSrc}`);
  };
  const closeClick = () => {
    history.push(`/activities`);
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_innerBox}>
          <h1 className={styles.title}>Activies</h1>
        </div>
      </header>
      <article className={styles.article}>
        {IMGURL.map((img) => (
          <div key={img.id} className={styles.imgBox}>
            <img
              className={styles.activityImg}
              src={process.env.PUBLIC_URL + img.imgUrl}
              alt="activity_img"
              onClick={imgClick}
            />
          </div>
        ))}
      </article>

      <PopUp closeClick={closeClick} />
    </main>
  );
};
export default Activities;
