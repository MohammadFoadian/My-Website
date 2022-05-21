import React from 'react';
import styles from './Product.module.css'
import { Link } from 'react-router-dom';


// Images
import shop1 from '../HPContainer.js/images/SportImg/shop1.jpg'
import shop2 from '../HPContainer.js/images/SportImg/shop2.jpg'
import shop3 from '../HPContainer.js/images/SportImg/shop3.jpg'



const Product = () => { // 55 full components
    return (
        <div className={styles.container}>

            <h2 className={styles.header}>Our Online Shop </h2>

            <div className={styles.picture}>
                <img src={shop1} alt='shopping' />
                <img src={shop2} alt='shopping' />
                <img src={shop3} alt='shopping' />
            </div>

        <div className={styles.display}>

            <h4 className={styles.benefits}>Benfits Of Online Shop</h4>

        <div className={styles.showBen}>
            <div className={styles.showBen1}>
                <ul>
                    <li>Shop from the home</li>
                    <li>Saves money</li>
                    <li> More options to choose</li>
                    <li>Easy return and cancel of items</li>
                    <li>No pressure to buy</li>
                </ul>
            </div>

            <div className={styles.showBen2}>
            <ul>
                    <li>Shop from the home</li>
                    <li>Saves money</li>
                    <li> More options to choose</li>
                    <li>Easy return and cancel of items</li>
                    <li>No pressure to buy</li>
                </ul>
            </div>
        </div>    
    </div>
        <footer className={styles.footer}>
            <p>Wants To Buy ? Go To Our <Link to='/products'>Online Shop</Link></p>
        </footer>
        </div>
        
    );
};

export default Product;