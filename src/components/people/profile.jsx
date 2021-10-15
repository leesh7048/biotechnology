import React from "react";

import styles from "./profile.module.css";

const Profile = ({ data }) => {
  const { imgURL, name, position, email } = data;
  return (
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
    </div>
  );
};

export default Profile;
