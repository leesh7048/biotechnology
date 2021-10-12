import React from "react";
import styles from "./people.module.css";
import profile_img from "./img/man.jpg";

const People = (props) => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_innerBox}>
          <h1 className={styles.title}>People</h1>
        </div>
      </header>
      <article className={styles.article}>
        <section className={styles.section}>
          <div className={styles.profileBox1}>
            <div className={styles.profile}>
              <img src={profile_img} alt="man" className={styles.people1} />
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
      </article>
    </main>
  );
};

export default People;
