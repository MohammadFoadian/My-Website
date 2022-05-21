import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./ShowNewsUi.module.css"
// import picture from ".././News/images/breaking-news.jpg"
import picture from "../HPContainer.js/images/trade1.jpg"


const ShowNewsUi =  (props) => {
    
    const {title , image , author , description , publish} = props
    
    

    return (
        <div className={styles.result}>
            <div className={styles.container} >
                <div className={styles.screen}>
                   <div className={styles.box}>
                       <div className={styles.imageDiv}>                           
                           <img className={styles.image} src={image} alt='' />                            
                       </div>
                       <div>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.description}>{description}</p>
                        <span className={styles.author}>{author}</span>
                        <span className={styles.publish}>{publish}</span>
                       </div>
                   </div>
                 </div>
            </div>
        </div>
    );
};

export default ShowNewsUi;