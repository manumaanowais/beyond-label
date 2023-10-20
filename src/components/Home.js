import React from 'react'
import Header from './Header';
import './Home.css';
import Footer from './Footer';

function Home() {
  return (
    <div className='home-page'>
      <Header />
      <div className='main-home-content'>
        <section className="featured-products">
          <h2>Featured Products</h2>
        </section>
        <section className="trending">
          <h2>Trending Now</h2>
        </section>
        <section className="newsletter">
          <h2>Subscribe to our Newsletter</h2>
          <p>Stay updated with the latest trends and offers.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home