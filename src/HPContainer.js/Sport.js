import React from 'react';
import styles from './Sport.module.css'
import { Link } from 'react-router-dom';

// Images
import championsLeague from '../HPContainer.js/images/SportImg/championsleague.jpg'
import worldCup from '../HPContainer.js/images/SportImg/worldcup.jpg'
import doctor from "../HPContainer.js/images/SportImg/doctor.jpg"
import technologies from "../HPContainer.js/images/SportImg/technology.jpg"
import bussiness from "../HPContainer.js/images/SportImg/bussiness.jpg"
import enterteainment from "../HPContainer.js/images/SportImg/entertainment.jpg"
import science from "../HPContainer.js/images/SportImg/science.jpg"
import movies from "../HPContainer.js/images/SportImg/movies.jpg"


// Sliders
import { ImageSlider } from './helper/ImageSlider';
import { SportSlider } from './helper/SportSlider';


const Sport = () => { // 56 full components
    return (
        <div className={styles.container}>

            <h1 className={styles.header}> Latest News ! </h1>  

        <div className={styles.display}>
            <div className={styles.first}>
            <Link to='/sport'>
                    <img src={doctor} alt='Medical Science' />
                </Link>
                <p>Latest Healthy <Link to='/news'>News</Link></p>
                <p>Corona Virus and Vaccine</p>
            </div>
            
            <div className={styles.first}>

                <Link to='/news'>
                    <img src={championsLeague} alt='champions league' />
                </Link>

                <p>Latest European Football <Link to='/news'>News</Link> </p>
                <p>Football Is The Life </p>
            </div>
            

            <div className={styles.first}>

                <Link to='/news'>
                    <img src={enterteainment} alt='Entertainment' />
                </Link>
                
                <p>Latest Movies And Serials  <Link to='/news'>News</Link> In Around The World !</p>
                <p>Movies Made Your Life Better  </p>
            </div>

            <div className={styles.first}>

                <Link to='/news'>
                    <img src={bussiness} alt='champions league' />
                </Link>
                
                <p>Latest Business   <Link to='/news'>News</Link></p>
                <p>Business Improves Your Life </p>
            </div>

            
            

            <div className={styles.first}>

                <Link to='/news'>
                    <img src={worldCup} alt='WorldCup' />
                </Link>
                
                <p>Latest News About QATAR World Cup 2022 In <Link to='/news'>News</Link> Nav Bar</p>
                <p>QATAR World Cup Group Stage ! </p>
            </div>

            <div className={styles.first}>

                <Link to='/news'>
                    <img src={technologies} alt='champions league' />
                </Link>
                
                <p>the application of scientific knowledge for practical purposes <Link to='/news'>News</Link> Nav Bar</p>
                <p>Latest News About Technology      </p>
            </div>

            <div className={styles.first}>

                <Link to='/news'>
                    <img src={science} alt='champions league' />
                </Link>
                
                <p> intellectual and practical activity encompassing the systematic <Link to='/news'>News</Link> Nav Bar</p>
                <p>Latest Investigation Around The World ! </p>
            </div>

            <div className={styles.first}>

                <Link to='/news'>
                    <img src={movies} alt='champions league' />
                </Link>
                
                <p>Entertainment <Link to='/news'>News</Link> In Around The World !</p>
                <p>Entertainments Are Needed In Our Life </p>
                
            </div>
            </div> 

            <div className={styles.footer}>
                <p>For More Info And News Check <Link to='/news'>News</Link> In Navigation Bar !</p>    
            </div>   
        </div>
    );
};

export default Sport;