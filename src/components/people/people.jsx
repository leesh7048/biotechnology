import React, { useState } from "react";
import styles from "./people.module.css";

import Profile from "./profile";
import { PROFILES } from "./contant";

const People = (props) => {
  const [profile, setProfile] = useState(PROFILES);
  console.log(profile.map((a) => a));

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_innerBox}>
          <h1 className={styles.title}>People</h1>
        </div>
      </header>
      <article className={styles.article}>
        <section className={styles.section1}>
          <div className={styles.profileBox1}>
            <div className={styles.profile}>
              <img
                src={process.env.PUBLIC_URL + "/images/woman.jpg"}
                alt="man"
                className={styles.people1}
              />
              <h1 className={styles.name}>이택규</h1>
              <ul>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
              </ul>
            </div>
            <div className={styles.comment}>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos ipsum modi, blanditiis fugit pariatur asperiores
                obcaecati ipsam corrupti veniam vitae vero provident
                voluptatibus similique corporis est alias labore sed nisi!
              </span>
            </div>
          </div>
        </section>
        <section className={styles.section2}>
          {profile.map((data) => (
            <Profile data={data} key={data.id} />
          ))}
        </section>
      </article>
    </main>
  );
};

export default People;
