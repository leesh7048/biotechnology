import React, { useState } from "react";
import styles from "./people.module.css";

import StudentProfile from "./studentProfile";
import ProfessorProfile from "./professorProfile";

import { PROFILES } from "./contant";

const People = (props) => {
  const [profiles, setProfiles] = useState(PROFILES);

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
            {profiles.professor.map((data) => (
              <ProfessorProfile data={data} key={data.id} />
            ))}
          </div>
        </section>
        <span className={styles.underline}></span>
        <section className={styles.professor}>
          <h1>Research Professor</h1>
          <div className={styles.professorProfile}>
            {profiles.researchProfessor.map((data) => (
              <ProfessorProfile data={data} key={data.id} />
            ))}
          </div>
        </section>
        <span className={styles.underline}></span>
        <section className={styles.students}>
          <h1>PostDoc</h1>
          <div className={styles.studentProfile}>
            {profiles.postDoc.map((data) => (
              <StudentProfile data={data} key={data.id} />
            ))}
          </div>
        </section>
        <span className={styles.underline}></span>
        <section className={styles.students}>
          <h1>Students</h1>
          <div className={styles.studentProfile}>
            {profiles.student.map((data) => (
              <StudentProfile data={data} key={data.id} />
            ))}
          </div>
        </section>
        <span className={styles.underline}></span>
        <section className={styles.graduates}>
          <h1>Alumni</h1>
          <div className={styles.graduationProfile}>
            {profiles.alumnie.map((data) => (
              <StudentProfile data={data} key={data.id} />
            ))}
          </div>
        </section>
      </article>
    </main>
  );
};

export default People;
