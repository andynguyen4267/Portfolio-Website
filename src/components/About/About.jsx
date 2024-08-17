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
              I graduated in 2024 from UCI. Since then, I've been on an exciting journey of building and 
              deploying web applications that make a difference. My expertise lies in developing robust and 
              scalable web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/light-bulb.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>My Philosophy</h3>
              <p>
              I believe in continuous learning and always strive to keep up with the latest industry trends and 
              technologies. My approach to software engineering is rooted in constantly seeking to improve both 
              my technical skills and the user experience of my applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/basketball.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Outside of Work</h3>
              <p>
                While I'm not coding, you can find me at a basketball court shooting some hoops or immersing myself
                during board game nights.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};