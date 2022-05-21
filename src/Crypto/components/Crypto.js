import React, { useState , useEffect } from 'react';
import styles from "./Crypto.module.css"

// components
import { getCoin } from '../services/Api';
import Coin from './Coin';
import Loader from './Loader';
import Navbar from '../../HPContainer.js/Navbar';

const Crypto = () => {  // 5

    const [coin , setCoin] = useState([]) // 6
    const [search , setSearch] = useState([]) // 18

    useEffect(() => {  // 7

        const fetchApi = async () => { // 8
            const data = await getCoin() // 9
            setCoin(data) // 10
            console.log(data)  // 11          
        }

        fetchApi() // 12
    } , [])

    const changeHandler = (e) => { // 19
        setSearch(e.target.value) // 20
    }

    const searchCoins = coin.filter(coin => coin.name.toLowerCase().includes(search)) // 21

    return (

        
        <div>
            <Navbar />
            {/* 13 */}
            <h3 className={styles.head}>Currencies Price Online</h3>
            <input className={styles.input} placeholder='...Search' type='text' value={search} onChange={changeHandler} />

            
        {
            coin.length  ?
            <>

            <div className={styles.coinContainer} >
                {
                    searchCoins.map(coin => <Coin 
                                        key={coin.id}
                                        name={coin.name}
                                        image={coin.image}  
                                        symbol={coin.symbol}                     
                                        price={coin.current_price}
                                        marketCap={coin.market_cap}
                                        priceChange={coin.price_change_percentage_24h}
                                          />)
                }
            </div> 
            </>
            : <Loader/> // 17
        }   
        </div>
            
    );
};

export default Crypto;