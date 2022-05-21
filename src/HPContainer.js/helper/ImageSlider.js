import React , { useState} from 'react'
import { SliderData } from './SliderData'
import { SportSlider } from './SportSlider'
import styles from "../Crypto.module.css"
import {FaArrowAltCircleRight , FaArrowAltCircleLeft} from 'react-icons/fa'

export const ImageSlider = (slides   ) => { // 45
    

    
    const [current , setCurrent] = useState(0) // 48
    const length = slides.length // 49
    console.log(length)
    

    // 50
    const nextSlide = () => {
        setCurrent(current > 6  ? current - 6  : current + 1) 
    }

    // 51
    const prevSlide = () => {
        setCurrent(current === 0 ? current + 1 : current - 1)
    }

    // 52
    if(Array.isArray(slides) || slides.length <= 0) { 
        return null
    }
  return (
    <section className={styles.slider}>

        {/* 53 */}
        <FaArrowAltCircleLeft className={styles.leftarrow} onClick={prevSlide} /> 

        {/* 54 */}
        <FaArrowAltCircleRight className={styles.rightarrow} onClick={nextSlide} />

    
        
        { 
        SliderData.map((slides , index) => { // 46
            return (
            
            <div className={index === current ? styles.slide && styles.active  : styles.slide} key={index}>
                {index === current && (

                <img src={slides.image} alt='crypotimage' className={styles.image} /> // 47
                
                )}
            </div>        
            )
        }) 
        
    }
        
        
    

        

        
    </section>
  )
}
