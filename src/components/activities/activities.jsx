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

    history.push(`/activities?imageUrl=${imgSrc}`, {
      date: event.target.dataset.date,
      title: event.target.dataset.title,
      content: event.target.dataset.content,
    });
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
        {IMGURL.map(({ id, title, imgUrl, date, content }) => (
          <div key={id} className={styles.imgBox}>
            <img
              data-title={title}
              data-date={date}
              data-content={content}
              className={styles.activityImg}
              src={process.env.PUBLIC_URL + imgUrl}
              alt="activity_img"
              onClick={imgClick}
            />
          </div>
        ))}
      </article>

      <PopUp closeClick={closeClick} data={history.location.state} />
    </main>
  );
};
export default Activities;
