import React, { useState } from "react";
import styles from "./people.module.css";

import Profile from "./profile";
import { PROFILES } from "./contant";

const People = (props) => {
  const [profiles, setProfiles] = useState(PROFILES);
  console.log(profiles.filter((a) => a.position === "Professor").map((b) => b));

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_innerBox}>
          <h1 className={styles.title}>People</h1>
        </div>
      </header>
      <article className={styles.article}>
        <section className={styles.professor}>
          <h1>Professors</h1>
          <div className={styles.professorProfile}>
            {profiles
              .filter((profile) => profile.position === "Professor")
              .map((data) => (
                <Profile data={data} key={data.id} />
              ))}
          </div>
        </section>
        <span className={styles.underline}></span>
        <section className={styles.students}>
          <h1>Postdoc & Students</h1>
          <div className={styles.studentProfile}>
            {profiles
              .filter((profile) => profile.position === "Student")
              .map((data) => (
                <Profile data={data} key={data.id} />
              ))}
          </div>
        </section>
        <span className={styles.underline}></span>
        <section className={styles.graduates}>
          <h1>Alumni</h1>
          <div className={styles.graduationProfile}>
            {profiles
              .filter((profile) => profile.position === "Graduate")
              .map((data) => (
                <Profile data={data} key={data.id} />
              ))}
          </div>
        </section>
      </article>
    </main>
  );
};

export default People;
