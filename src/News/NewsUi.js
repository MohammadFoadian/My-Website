import React  from 'react';
import { useRef } from 'react';
import Navbar from '../HPContainer.js/Navbar';
import styles from "./NewsUi.module.css"
import Footer from '../components/Footer';


const NewsUi = (props) => {

    const {submitHandler , inputRef  , countryRef , categoryRef} = props

    
    return (
        <>
            <Navbar />
            <div className={styles.header}>
                <h1>Search Top News</h1>
            </div>
        <div className={styles.container}>
            <div className={styles.input}>
                <label>Search By Name</label>
                <input ref={inputRef} type='text' placeholder='Search By Name'  id='news-name' />
            </div>
            
            <div className={styles.country}>
                <label>Country</label>
                <select ref={countryRef} >
                    <option value=''>-- select --</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="gb">United Kingdom</option>
                    <option value="de">Germany</option>
                    <option value="br">Brazil</option>
                    <option value="ar">Argantina</option>
                    <option value="ru">Russia</option>
                    <option value="cn">China</option>
                    <option value="au">Astralia</option>
                </select>
            </div>

            <div className={styles.category}>
                <label>Category</label>
                <select ref={categoryRef} >
                    <option value=''>-- select --</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sport">Sport</option>
                    <option value="technology">Technology</option>
                </select>
            </div>
            <div className={styles.submitButton}>
                <button  onClick={submitHandler} > SEARCH </button>
            </div>

            
        </div>

        <div className={styles.result}>

        </div>
        
        </>
    );
};
export default NewsUi;


