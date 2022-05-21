import React from 'react';
import styles from './Coin.module.css'

const Coin = (props) => {

    const {name , symbol , image , marketCap , priceChange , price} = props

    return (
        // 15 full
        <>
        
        <div className={styles.container}>

            <img className={styles.image} src={image} alt='images' />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>  {price.toLocaleString()} $ </span>
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange.toFixed(2)} %</span>
            <span className={styles.marketCap}>{marketCap.toLocaleString()}</span>

        </div>
        </>
    );
};

export default Coin;