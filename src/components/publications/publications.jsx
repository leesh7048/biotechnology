import React, { useState } from "react";
import styles from "./publications.module.css";

const Publications = (props) => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header_innerBox}>
          <h1 className={styles.title}>Publications</h1>
        </div>
      </header>
      <article className={styles.article}>
        <section className={styles.section}>
          <h1 style={{ fontSize: "2rem" }}>2021</h1>
          <div>
            <a
              href={process.env.PUBLIC_URL + "/assets/file.pdf"}
              target="_blank"
            >
              <p>
                1. In brief: Myocarditis with the Pfizer/BioNTech and Moderna
                COVID-19 vaccines. Med Lett Drugs Ther 2021;63:e9.
              </p>
            </a>
            <p>
              1. In brief: Myocarditis with the Pfizer/BioNTech and Moderna
              COVID-19 vaccines. Med Lett Drugs Ther 2021;63:e9.
            </p>
            <p>
              1. In brief: Myocarditis with the Pfizer/BioNTech and Moderna
              COVID-19 vaccines. Med Lett Drugs Ther 2021;63:e9.
            </p>
            <p>
              1. In brief: Myocarditis with the Pfizer/BioNTech and Moderna
              COVID-19 vaccines. Med Lett Drugs Ther 2021;63:e9.
            </p>
            <h1 style={{ fontSize: "2rem" }}>2020</h1>

            <p>
              1. In brief: Myocarditis with the Pfizer/BioNTech and Moderna
              COVID-19 vaccines. Med Lett Drugs Ther 2021;63:e9.
            </p>
            <p>
              1. In brief: Myocarditis with the Pfizer/BioNTech and Moderna
              COVID-19 vaccines. Med Lett Drugs Ther 2021;63:e9.
            </p>
            <p>
              1. In brief: Myocarditis with the Pfizer/BioNTech and Moderna
              COVID-19 vaccines. Med Lett Drugs Ther 2021;63:e9.
            </p>
            <p>
              1. In brief: Myocarditis with the Pfizer/BioNTech and Moderna
              COVID-19 vaccines. Med Lett Drugs Ther 2021;63:e9.
            </p>
            <p>
              1. In brief: Myocarditis with the Pfizer/BioNTech and Moderna
              COVID-19 vaccines. Med Lett Drugs Ther 2021;63:e9.
            </p>
            <p>
              1. In brief: Myocarditis with the Pfizer/BioNTech and Moderna
              COVID-19 vaccines. Med Lett Drugs Ther 2021;63:e9.
            </p>
            <p>
              1. In brief: Myocarditis with the Pfizer/BioNTech and Moderna
              COVID-19 vaccines. Med Lett Drugs Ther 2021;63:e9.
            </p>
            <p>
              1. In brief: Myocarditis with the Pfizer/BioNTech and Moderna
              COVID-19 vaccines. Med Lett Drugs Ther 2021;63:e9.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Publications;
