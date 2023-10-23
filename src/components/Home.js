import React from 'react'
import Header from './Header';
import './Home.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home-page'>
      <Header />
      <div className='main-home-content'>
        <div>
          <div className="row">
            <div className="col-2">
              <h1>Give Your Workout<br />A New Style!</h1>
              <p>Success isn't always about greatness. It's about consistency. Consistent <br />hardwork gains success. Greatness will come</p>
              <Link to='/home' className="btn">Explore Now &#8594;</Link>
            </div>
            <div className="col-2">
              <img alt='products' src={`${process.env.PUBLIC_URL}/assets/image1.jpg`} />
            </div>
          </div>
        </div>
      </div><br /><br />

      {/* featured categories */}

      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <Link to="/image/category-1">
                <img alt='products' src={`${process.env.PUBLIC_URL}/assets/category-1.jpg`} />
              </Link>
            </div>
            <div className="col-3">
              <Link to="/image/category-2">
                <img alt='products' src={`${process.env.PUBLIC_URL}/assets/category-2.jpg`} />
              </Link>
            </div>
            <div className="col-3">
              <Link to="/image/category-3">
                <img alt='products' src={`${process.env.PUBLIC_URL}/assets/category-3.jpg`} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* featured products */}

      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          <div className="col-4">
            <Link to="/image/product-1">
              <img alt='products' src={`${process.env.PUBLIC_URL}/assets/product-1.jpg`} />
            </Link>
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>50.00</p>
          </div>
          <div className="col-4">
            <Link to="/image/product-2">
              <img alt='products' src={`${process.env.PUBLIC_URL}/assets/product-2.jpg`} />
            </Link>
            <h4>Black Shoes</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>50.00</p>
          </div>
          <div className="col-4">
            <Link to="/image/product-3">
              <img alt='products' src={`${process.env.PUBLIC_URL}/assets/product-3.jpg`} />
            </Link>
            <h4>Track Pant</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <p className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>50.00</p>
          </div>
          <div className="col-4">
            <Link to="/image/product-4">
              <img alt='products' src={`${process.env.PUBLIC_URL}/assets/product-4.jpg`} />
            </Link>
            <h4>Purple Puma T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>50.00</p>
          </div>
        </div>
        <h2 className="title">Latest Products</h2>
        <div className="row">
          <div className="col-4">
            <Link to="/image/product-5">
              <img alt='products' src={`${process.env.PUBLIC_URL}/assets/product-5.jpg`} />
            </Link>
            <h4>Silver color Shoes</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>50.00</p>
          </div>
          <div className="col-4">
            <Link to="/image/product-6">
              <img alt='products' src={`${process.env.PUBLIC_URL}/assets/product-6.jpg`} />
            </Link>
            <h4>Black Puma T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>50.00</p>
          </div>
          <div className="col-4">
            <Link to="/image/product-7">
              <img alt='products' src={`${process.env.PUBLIC_URL}/assets/product-7.jpg`} />
            </Link>
            <h4>HRX Socks</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <p className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>50.00</p>
          </div>
          <div className="col-4">
            <Link to="/image/product-8">
              <img alt='products' src={`${process.env.PUBLIC_URL}/assets/product-8.jpg`} />
            </Link>
            <h4>Fossil Watches</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>50.00</p>
          </div>
          <div className="row">
            <div className="col-4">
              <Link to="/image/product-9">
                <img alt='products' src={`${process.env.PUBLIC_URL}/assets/product-9.jpg`} />
              </Link>
              <h4>Roadster Watches</h4>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
              </svg>50.00</p>
            </div>
            <div className="col-4">
              <Link to="/image/product-10">
                <img alt='products' src={`${process.env.PUBLIC_URL}/assets/product-10.jpg`} />
              </Link>
              <h4>Black Shoes</h4>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
              </svg>50.00</p>
            </div>
            <div className="col-4">
              <Link to="/image/product-11">
                <img alt='products' src={`${process.env.PUBLIC_URL}/assets/product-11.jpg`} />
              </Link>
              <h4>Silver Shoes</h4>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </div>
              <p className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
              </svg>50.00</p>
            </div>
            <div className="col-4">
              <Link to="/image/product-12">
                <img alt='products' src={`${process.env.PUBLIC_URL}/assets/product-12.jpg`} />
              </Link>
              <h4>Black Track Pant</h4>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <p className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
              </svg>50.00</p>
            </div>
          </div>

          {/* offer */}

          <div className="offer">
            <div className="small-container">
              <div className="row">
                <div className="col-2">
                  <img alt='products' src={`${process.env.PUBLIC_URL}/assets/exclusive.jpg`} className="offer-img" />
                </div>
                <div className="col-2">
                  <p>Exclusively Available On Beyond Lablel</p>
                  <h1>Smart Band 4</h1>
                  <small>The Mi smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.</small><br />
                  <Link to='/image/exclusive' className="btn">Buy Now &#8594;</Link>
                </div>
              </div>
            </div>
          </div>

          {/* testimonial */}

          <div className="testimonial">
            <div className="small-container">
              <div className="row">
                <div className="col-3">
                  <i className="fa fa-quote-left"></i>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <img alt='products' src={`${process.env.PUBLIC_URL}/assets/user-1.jpg`} />
                  <h3>Mike Smith</h3>
                </div>
                <div className="col-3">
                  <i className="fa fa-quote-left"></i>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <img alt='products' src={`${process.env.PUBLIC_URL}/assets/user-2.jpg`} />
                  <h3>Mabel Joe</h3>
                </div>
                <div className="col-3">
                  <i className="fa fa-quote-left"></i>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <img alt='products' src={`${process.env.PUBLIC_URL}/assets/user-3.jpg`} />
                  <h3>Sean Parker</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home