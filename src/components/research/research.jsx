import React from "react";
import styles from "./research.module.css";
import * as Styled from "./research.styled";

const Research = (props) => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_innerBox}>
          <h1 className={styles.title}>Research</h1>
        </div>
      </header>
      <article className={styles.article}>
        <section className={styles.section}>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            commodi consequatur, nostrum sequi totam reprehenderit obcaecati
            deserunt dolore dolores voluptates sapiente dignissimos aut adipisci
            unde quia doloribus nulla optio! Nam.
          </span>
          <br />
          <br />
          <span>
            <b>title</b>
          </span>
          <br />
          <br />
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            commodi consequatur, nostrum sequi totam reprehenderit obcaecati
            deserunt dolore dolores voluptates sapiente dignissimos aut adipisci
            unde quia doloribus nulla optio! Nam. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nostrum reprehenderit facere enim
            quisquam explicabo harum voluptas, corrupti neque quia. Molestiae
            eligendi corporis pariatur ducimus, velit culpa deserunt ut id! Ut!
          </span>
        </section>
      </article>
    </main>
  );
};

export default Research;
