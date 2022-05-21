import React from 'react';

// icons
import instagram from "../assets/icon/icons8-instagram-60.png"
import telegram from "../assets/icon/icons8-telegram-app-50.png"
import whatsapp from "../assets/icon/icons8-whatsapp-50.png"
import twitter from "../assets/icon/icons8-twitter-50.png"

import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.row1}>
                <h5>Call Us </h5>
                <ul>
                    <li>E-Mail : foadian.mohammad2000@gmail.com</li>
                    <li>Phone Number : 0912xxxxxxxxx</li>
                    <li>Website : www.?????????</li>
                </ul>
            </div>

            <div className={styles.row2}>
                <h5>Follow Us On :  </h5>
                <ul>
                    <li><img className={styles.instagram} src={instagram} alt='social media' /></li>
                    <li><img src={whatsapp} alt='social media' /></li>
                    <li><img src={telegram} alt='social media' /></li>
                    <li><img src={twitter} alt='social media' /></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;