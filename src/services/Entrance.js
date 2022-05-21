import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Entrance.module.css'


const Entrance = () => { // 2
    return (
        <div className={styles.body}>
            {/* 3 full option */}
            <h1 className={styles.welcome}> Welcome To Our Website  </h1>
            <h3 className={styles.joinus}>Join Us Now !</h3>
           <Link  to='/signup' className={styles.button}> <button> Click Here ! </button></Link>
        </div>
    );
};

export default Entrance;