import React from "react";
import { Link } from "react-router-dom";
import styles from "./Crypto.module.css"

// images
import trade1 from './images/trade1.jpg'
import trade2 from './images/trade2.jpg'
import trade3 from './images/trade3.jpg'

// Slider
import { ImageSlider } from "./helper/ImageSlider";
import { SliderData } from "./helper/SliderData";

// 43 full full images

const Crypto = () => { 
  return (

    <div className={styles.screen}>
    <div className={styles.container}>


      <div>
        <h3 className={styles.header}>Crypto Currencies</h3>
        
        
        {/* <img src={trade1} alt="trading" className={styles.images} />
        <img src={trade2} alt="trading" className={styles.images} />
        <img src={trade3} alt="trading" className={styles.images} />
        <img src={trade3} alt="trading" className={styles.images} />
        <img src={trade3} alt="trading" className={styles.images} />
        <img src={trade3} alt="trading" className={styles.images} />
        <img src={trade3} alt="trading" className={styles.images} />
        <img src={trade3} alt="trading" className={styles.images} />
        <img src={trade3} alt="trading" className={styles.images} /> */}

        <ImageSlider slides={SliderData} typed='cryptoss' ali='hi'  />
        

    <div className={styles.description}>

        <p>  <b>What is Crypto ? </b><br></br> 
             Cryptocurrency, sometimes called crypto-currency or crypto, is any form of currency that exists digitally or virtually and uses cryptography to secure transactions. Cryptocurrencies don't have a central issuing or regulating authority, instead using a decentralized system to record transactions and issue new units </p>

        <p>  <b>Is crypto a good investment?</b><br></br>
        sometimes called crypto-currency or crypto  Investing in crypto assets is risky but also potentially extremely profitable. Cryptocurrency is a good investment if you want to gain direct exposure to the demand for digital currency. A safer but potentially less lucrative alternative is buying the stocks of companies with exposure to cryptocurrency</p>

        <p> <b>Is it safe to own crypto?</b> <br></br>
                Crypto held on an exchange or in a wallet is not FDIC-insured like money in the bank. Make sure you trade and hold your crypto on a platform that offers robust security measures — including keeping a significant amount of holdings in its own cold storage and two-factor authentication for users and if you're looking to build long-term </p>

    </div>
        <p className={styles.footer}>
          You can check currencies on <Link to='/crypto'>Crypto</Link>
        </p>
        <br></br>
        <br></br>
      </div>
    </div>
    </div>
  );
};

export default Crypto;
