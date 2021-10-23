import React from "react";

import styles from "./profile.module.css";

const Profile = ({ data }) => {
  const { imgURL, name, position, email } = data;

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
          </div>
          <div className={styles.career}>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              temporibus illo architecto quos perspiciatis veniam consequatur
              optio voluptatem labore, accusantium corrupti incidunt quidem
              reprehenderit, molestiae adipisci itaque est obcaecati ut!
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
