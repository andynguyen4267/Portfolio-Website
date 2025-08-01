import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/information.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/suitcase.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>My Journey</h3>
              <p>
              I graduated in 2024 from UCI and have since been on a journey focused on using data to uncover insights and solve
              real-world problems. I enjoy exploring trends, identifying patterns, and turning raw data into actionable insights.
              I'm excited to continue developing as an analyst and contribute to data-driven decision-making.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/light-bulb.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>My Philosophy</h3>
              <p>
              I believe in continuous learning and staying curious. I'm committed to growing my analytical skills and
              keeping up with evolving tools and industry trends. My goal is to turn data into decisions that make a real difference.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/basketball.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Outside of Work</h3>
              <p>
                While I'm not diving into data, you'll find me shooting hoops on the basketball court or
                enjoying a good board game night with friends.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};