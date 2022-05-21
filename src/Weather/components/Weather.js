import React, { useEffect, useState } from 'react';
import Navbar from '../../HPContainer.js/Navbar';
import { getApi } from '../services/Api';
import ShowWeather from './ShowWeather';
import styles from "./ShowWeather.module.css"


const Weather = () => {

    const [weather , setWeather] = useState([])
    const [city , setCity] = useState([])
    const [data , setData] = useState([])


    const cityName = city

    const changeHandler = (e) => { 
        setCity(e.target.value)
    }



    const submitHandler = async (e) => { 
        e.preventDefault()
        
        const fetchApi = async () => { 
            
            const dataCity = await getApi(cityName)
            .catch(function (error) { 
                if(error.response) { 
                    alert("The City Not Found!")   
                }      
            })
            const result = dataCity.weather
            setWeather(result)
            setData(dataCity)     
        } 
        fetchApi()
    }

    

    return (
        <div>
            <Navbar />
            <div className={styles.searchBox}>
                <input className={styles.input} placeholder='..Search City' type='text' value={city} onChange={changeHandler} />
                <button className={styles.btn} onClick={submitHandler}> Search </button>
            </div>

            
            {
                 
                weather.map(wet => <ShowWeather
                                        key={wet.id}
                                        clouds={wet.clouds}
                                        main={wet.main}
                                        description={wet.description}
                                        data={data}
                                         />)
                                  
            }
            
            

            
        </div>
    );
};

export default Weather;