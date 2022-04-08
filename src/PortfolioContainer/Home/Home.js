import React from 'react';
import Header from './Header/Header.js';
import Profile from './Profile/Profile.js';
import Footer from './Footer/Footer.js';
import './Home.css';

export default function Home(props) {
  return (
    <div className='home-container' id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
    </div>
  )
}
