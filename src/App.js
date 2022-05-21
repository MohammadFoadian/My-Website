import React from 'react';
import {Route , Routes , Navigate } from 'react-router-dom'


// components 
import Login from './components/Login';
import Entrance from './services/Entrance';
import Authentication from './components/SignUp';
import HomePage from './components/HomePage';
import Crypto from '../src/Crypto/components/Crypto.js'
import News from './News/News';
import ShowNewsUi from './News/ShowNewsUi';
import Weather from './Weather/components/Weather';
import AboutUs from './AboutUs/AboutUs';
import OnlineShop from './OnlineShop/OnlineShop';

const App = () => { // 1
  return (
    <div>

      
      <Routes> {/* 4 */}

        <Route path='/signup' element={<Authentication />}></Route> {/* 8 */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/HomePage' element={<HomePage />}></Route>
        <Route path='/crypto' element={<Crypto />} ></Route>
        <Route path='/products' element={<OnlineShop />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/shownewsui' element={<ShowNewsUi />}></Route>
        <Route path='/news' element={<News />} ></Route>
        <Route path='/weather' element={<Weather />}></Route>
        <Route path='/welcome' element={<Entrance /> }></Route> {/* 5 */}
        <Route path='/' element={<Navigate replace to='/welcome' />}></Route> {/* 6 */}
      </Routes>
      
    </div>
  );
};

export default App;