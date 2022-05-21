import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import styles from "./Banner.module.css"



// components
import Crypto from './Crypto';
import Product from './Product';
import Sport from './Sport';

const Banner = () => { // 43
    return (
        <div>

            <h1 className={styles.header}>What We Have On Our Website </h1>
            
            <Sport />
            <Crypto />
            <Product />
            <Footer />
       
        </div>
    );
};

export default Banner;