import React, { useState, useEffect, useCallback, useMemo} from 'react'
import Header from './Header';
import './Home.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNewDropsClick = () => {
    document.getElementById('newDropsProducts').scrollIntoView();
  }

  const handleTrendingClick = () => {
    document.getElementById('trendingProducts').scrollIntoView();
  }

  const handleLatestClick = () => {
    document.getElementById('latestProducts').scrollIntoView();
  }


  const carouselContent = useMemo(() => [
    {
      image: `${process.env.PUBLIC_URL}/assets/image1.jpg`,
      title: 'Give Your Workout A New Style!',
      description: "Success isn't always about greatness. It's about consistency. Consistent hardwork gains success. Greatness will come",
      link: '/home',
      backgroundColor: '#e6e6e6'
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/sliderimage-1.jpg`,
      title: 'Winter Sale 50% Off',
      description: 'Find The Boundaries. Push Through!',
      link: '/image/sliderimage-1',
      backgroundColor: 'white',
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/sliderimage-2.jpg`,
      title: "Men's Latest Fashion Sale",
      description: 'Starting at RS. 999',
      link: '/image/sliderimage-2',
      backgroundColor: 'white',
    },
    // Add more content objects as needed
  ], []);

  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const nextContent = useCallback(() => {
    setCurrentContentIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
  }, [carouselContent]);

  const prevContent = useCallback(() => {
    setCurrentContentIndex((prevIndex) =>
      prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1
    );
  }, [carouselContent]);

  useEffect(() => {
    const interval = setInterval(nextContent, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentContentIndex, nextContent]);


  const currentContent = carouselContent[currentContentIndex];

  return (
    <div className='home-page'>
      <Header />
      {/* eslint-disable-next-line */}
      <marquee style={{ fontSize: '18px', paddingTop: '10px' }}>Trendiest Sale Is Live! Get 50% Off On Your Favourite Outfits</marquee>
      <div className='main-home-content'>
        <div className='header' style={{ backgroundColor: currentContent.backgroundColor }}>
          <div className="row">
            <div className="col-2">
              <h1>{currentContent.title}</h1>
              <p>{currentContent.description}</p>
              <Link to={currentContent.link} className="btn">
                Explore Now &#8594;
              </Link>
            </div>
            <div className="col-2">
              <img className='slider-images' alt='products' src={currentContent.image} />
            </div>
          </div>
        </div>
        <div className="slider-buttons">
          <button onClick={prevContent} className="prev-btn">
            &#10094;
          </button>
          <button onClick={nextContent} className="next-btn">
            &#10095;
          </button>
        </div>
      </div>

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

      {/* Tabs */}
      <div className='home-page-tabs'>
        <Paper square className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab label="NEW DROPS" onClick={handleNewDropsClick} />
            <Tab label="TRENDING" onClick={handleTrendingClick} />
            <Tab label="LATEST" onClick={handleLatestClick} />
          </Tabs>
        </Paper>
      </div>

      {/* featured products */}

      <div className="small-container">
        <h2 className="title" id='newDropsProducts'>New Drops</h2>
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
        <h2 className="title" id='trendingProducts'>Trending Products</h2>
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

          <h2 className="title" id='latestProducts'>Latest Products</h2>
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