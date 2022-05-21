import React from 'react';
import styles from "./OnlineShop.module.css"

const OnlineShop = () => {
    return (
        <div>
            <h1 className={styles.header}>Check The Link Below For Our Online Shop</h1>
            <h4 className={styles.link}><a  href='https://unique-axolotl-296cfb.netlify.app/'>CLICK HERE</a></h4>
        </div>
    );
};

export default OnlineShop;