import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function ProductDetails({ product }) {
    const btnstyle = { margin: '8px 0' };

    const { dispatch } = useCart();

    const { imageName } = useParams();
    const [mainImage, setMainImage] = useState(`${process.env.PUBLIC_URL}/assets/${imageName}.jpg`);
    const [selectedSize, setSelectedSize] = useState('XL'); // State to store the selected size
    const [quantity, setQuantity] = useState(1);

    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleGalleryImageClick = (image) => {
        setMainImage(image);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };
    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_TO_CART', item: {
                id: imageName + '1',
                name: imageName,
                size: selectedSize,
                quantity: quantity,
                price: 50
            }, payload: product
        });
        navigate(`/home`);
    }

    return (
        <div>
            <Header />
            {/* Single Products */}
            <div className="small-container single-product">
                <div className="row">
                    <div className="col-2">
                        <img
                            src={mainImage}
                            alt="product"
                            width="100%"
                            id="ProductImg"
                        />
                        <div className="small-img-row">
                            <div className="small-img-col">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/${imageName}.jpg`}
                                    alt="product"
                                    width="100%"
                                    className="small-img"
                                    onClick={() => handleGalleryImageClick(`${process.env.PUBLIC_URL}/assets/${imageName}.jpg`)}
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/gallery-2.jpg`}
                                    alt="product"
                                    width="100%"
                                    className="small-img"
                                    onClick={() => handleGalleryImageClick(`${process.env.PUBLIC_URL}/assets/gallery-2.jpg`)}
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/gallery-3.jpg`}
                                    alt="product"
                                    width="100%"
                                    className="small-img"
                                    onClick={() => handleGalleryImageClick(`${process.env.PUBLIC_URL}/assets/gallery-3.jpg`)}
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/gallery-4.jpg`}
                                    alt="product"
                                    width="100%"
                                    className="small-img"
                                    onClick={() => handleGalleryImageClick(`${process.env.PUBLIC_URL}/assets/gallery-4.jpg`)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <p>Home / T-shirt</p>
                        <h1>{imageName}</h1>
                        <h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                        </svg>50.00</h4>
                        <select onChange={handleSizeChange} value={selectedSize}>
                            <option>Select Size</option>
                            <option>XL</option>
                            <option>XXL</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                        <select onChange={handleQuantityChange} value={quantity}>
                            <option>Select Quantity</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <Button type='button' color='primary' variant="contained"
                            style={btnstyle} onClick={handleAddToCart}>Add To Cart</Button>
                        <h3>
                            Product Details <i className="fa fa-indent"></i>
                        </h3>
                        <p>
                            Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workout or denims for an evening out with the guys.
                        </p>
                    </div>
                </div>
            </div>

            {/* title */}
            <div className="small-container">
                <div className="row row-2">
                    <h2>Related Products</h2>
                    {/* <p>View More</p> */}
                </div>
            </div>

            {/* products */}
            <div className="small-container">
                <div className="row">
                    <div className="col-4">
                        <Link to="/product-details/product-9">
                            <img src={`${process.env.PUBLIC_URL}/assets/product-9.jpg`} alt="product" onClick={() => handleGalleryImageClick(`${process.env.PUBLIC_URL}/assets/product-9.jpg`)} />
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
                        <Link to="/product-details/product-10">
                            <img src={`${process.env.PUBLIC_URL}/assets/product-10.jpg`} alt="product" onClick={() => handleGalleryImageClick(`${process.env.PUBLIC_URL}/assets/product-10.jpg`)} />
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
                        <Link to="/product-details/product-11">
                            <img src={`${process.env.PUBLIC_URL}/assets/product-11.jpg`} alt="product" onClick={() => handleGalleryImageClick(`${process.env.PUBLIC_URL}/assets/product-11.jpg`)} />
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
                        <Link to="/product-details/product-12">
                            <img src={`${process.env.PUBLIC_URL}/assets/product-12.jpg`} alt="product" onClick={() => handleGalleryImageClick(`${process.env.PUBLIC_URL}/assets/product-12.jpg`)} />
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
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetails;
