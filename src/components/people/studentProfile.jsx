import React from "react";

import styles from "./studentProfile.module.css";

const StudentProfile = ({ data }) => {
  const { imgURL, name, position, email, career, mbti } = data;

  return (
    <div className={styles.container}>
      {imgURL && name && email && (
        <>
          <div className={styles.profile}>
            <img
              className={styles.img}
              src={process.env.PUBLIC_URL + imgURL}
              alt="img"
            />
            <h3>{name}</h3>
            <span className={styles.underscore}></span>
            <span>{position}</span>
            <span>{email}</span>
            <span>{mbti}</span>
          </div>
          <div className={styles.career}>
            <span>{career}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default StudentProfile;
