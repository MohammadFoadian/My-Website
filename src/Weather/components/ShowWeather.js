import React from 'react';
import styles from './ShowWeather.module.css'
import cloudy from '../assets/static/cloudy-day-1.svg'
import rainy from '../assets/static/rainy-1.svg'
import weather from "../assets/static/weather.svg"
import day from "../assets/static/day.svg"
import snow from "../assets/static/snowy-1.svg"


const ShowWeather = (props) => {

    const {main , description , data} = props
    
    


    return (
        <>
        
        
        <div className={styles.container}>
            
            <div className={styles.box}>
                <h4 className={styles.name}>{data.name}</h4>

                {
                    main.includes("Clouds") && <img className={styles.svg} src={cloudy} alt='cloud' />
                }
                {
                    main.includes("Clear") && <img className={styles.svg} src={day} alt='cloud' />
                }
                {
                    main.includes("Haze") && <img className={styles.svg} src={weather} alt='cloud' />
                }
                {
                    main.includes("Rain") && <img className={styles.svg} src={rainy} alt='cloud' />
                }
                {
                    main.includes("Snow") && <img className={styles.svg} src={snow} alt='cloud' />
                }
                {
                    main.includes("Thunder") && <img className={styles.svg} src={weather} alt='cloud' />
                }
                
                
                <p className={styles.main}>Condition : {main}</p>
                <p className={styles.description}>Description : {description}</p>
                <p className={styles.temp}>Tempreture : {(data.main.temp - 273.5).toFixed(2)} °C</p>
                <p className={styles.country}>Country : {data.sys.country}</p>    
                <p className={styles.wind}>wind Speed : {data.wind.speed}</p>
            </div>
        </div>

        </>
    );
};

export default ShowWeather;