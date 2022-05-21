import React from "react";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <div>
      <div className={styles.display}>
        <h4 className={styles.benefits}>Mohammad Foadian</h4>

        <div className={styles.showBen}>
          <div className={styles.showBen1}>
            <ul>
                <h5>Biography</h5>
              <li>21 Years Old</li>
              <li>University Student </li>
              <li> Study Computer Engineering</li>
              <li>Junior React Developer</li>
              <li>Foadian.mohammad797979@gmail.com</li>
            </ul>
          </div>

          <div className={styles.showBen2}>
            <ul>
              <h5>Skills</h5>
              <li>HTML & CSS</li>
              <li> BOOTSTRAP & SASS</li>
              <li>JAVA SCRIPT</li>
              <li>REACT.JS</li>
              <li>ENGLISH IELTS : 7.5</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
