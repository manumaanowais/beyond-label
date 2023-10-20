import React from 'react'
import Header from './Header';
import './Home.css';
import Footer from './Footer';

function Home() {
  return (
    <div className='home-page'>
      <Header />
      <div className='main-home-content'>
      </div>
      <Footer />
    </div>
  )
}

export default Home