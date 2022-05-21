import React from 'react';
import {Link} from 'react-router-dom'

// css
import styles from './Navbar.module.css'

// svg
import reactIcon from '../assets/icon/react.png'

const Navbar = () => { // 41
    return (

        // 42 full part
        <div className={styles.container}>
            <ul  className={styles.list}>
                <li><Link to={'/HomePage'}>HomePage</Link></li>
                <li><Link to='/crypto'>Crypto</Link></li>
                <li><Link to={'/news'}>News</Link></li>
                <li><Link to={'/weather'}>Weather</Link></li>
                <li><Link to='/aboutus'>About Us</Link></li>
            </ul>
            <div className={styles.logo}>
                <img src={reactIcon} alt='reactIcons' className={styles.img} />
            </div>
        </div>
    );
};

export default Navbar;