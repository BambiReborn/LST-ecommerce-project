// IMPORTS //
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'

// IMAGES //
import furnitureIMG1 from '../../assets/images/furnitureIMG-1.png'
import furnitureIMG2 from '../../assets/images/furnitureIMG-2.png'
import funitureIMG3 from '../../assets/images/furnitureIMG-3.png'
import furnitureIMG4 from '../../assets/images/furnitureIMG-4.png'

// STYLES //
import '../../Styles/Home/HeaderAndHero.css'

function HeroSection () {
    // WISHLIST UPDATE //
    const cartItems = useSelector(function (state: RootState) {
    return state.cart.items
    })

    const wishlistItems = useSelector(function (state: RootState) {
        return state.wishlist.items
    })

    const cartItemCount = cartItems.reduce(
        function (total, item) {
            return total + item.quantity
        },
        0
    )

    const wishlistItemCount = wishlistItems.length


    return (
        <section id='heroSection'>
            {/* DESKTOP VIEW HERO-TOP */}
            <div id='heroTop'>
                <h3>Bandage</h3>

                <div id='navsDIV'>
                    <nav id='navLinks'>
                        <Link to="/">Home</Link>
                        <Link to="/shop">Shop <i className="bi bi-chevron-down"></i></Link>
                        <Link to="/about">About</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contac">Contact</Link>
                        <Link to="/pages">Pages</Link>
                    </nav>

                    <div id='login-wrapper'>
                        <nav id='accountFlow'>
                            <span>
                                <i className="bi bi-person"></i>
                            </span>
                            <Link to="/login">Login</Link>
                            <span id='flowDivider'>
                                <i className="bi bi-slash-lg"></i>
                            </span>
                            <Link to="/register">Register</Link>
                        </nav>

                        <span id="header-actions">

                            {/* SEARCH */}
                            <i className="bi bi-search"></i>


                            {/* CART */}
                            <span className="header-action">
                                <Link to="/cart" aria-label="Shopping cart">
                                    <i className="bi bi-cart"></i>

                                    <span className="action-count">
                                        {cartItemCount}
                                    </span>
                                </Link>
                            </span>


                            {/* WISHLIST */}
                            <span className="header-action">
                                <i className="bi bi-heart"></i>

                                <span className="action-count">
                                    {wishlistItemCount}
                                </span>
                            </span>

                        </span>

                    </div>
                    
                </div>
            </div>

            {/* ==== MOBILE VIEW ===*/}
            <div id="mobile-nav">

                <div id="mobile-nav-top">

                    <h3>Bandage</h3>

                    <div id="mobile-nav-icons">
                        <Link to="/search" aria-label="Search">
                            <i className="bi bi-search"></i>
                        </Link>

                        <Link to="/cart" aria-label="Cart">
                            <i className="bi bi-cart3"></i>
                        </Link>

                        <button type="button" aria-label="Open menu">
                            <i className="bi bi-list"></i>
                        </button>
                    </div>

                </div>


                <nav id="mobile-nav-links">

                    <Link to="/">Home</Link>

                    <Link to="/shop">Product</Link>

                    <Link to="/pricing">Pricing</Link>

                    <Link to="/contact">Contact</Link>

                </nav>

            </div>

            {/* HERO-IMAGES */}
            <div id='main-wrapper'>
                <div id='div1'>
                    <img src={furnitureIMG1} alt="Furniture" />
                    <div className="div1-IMG-writeUp">
                        <h6><span style={{ color: '#2DC071'}}>5 Items</span></h6>
                        <h2>FURNITURE</h2>
                        <h6>Read More</h6>
                    </div>
                </div>

                <div id='div2'>
                    <div id='top'>
                        <img src={furnitureIMG2} alt="Furniture" />
                        <div className="top-IMG-writeUp">
                            <h6><span style={{color:'#2DC071'}}>5 Items</span></h6>
                            <h2>FURNITURE</h2>
                            <h6>Read More</h6>
                        </div>
                    </div>

                    <div id='bottom'>
                        <div id='left'>
                            <img src={funitureIMG3} alt="Furniture" />
                            <div className="bottomLeft-IMG-writeUp">
                                <h6><span style={{color:'#2DC071'}}>5 Items</span></h6>
                                <h2>FURNITURE</h2>
                                <h6>Read More</h6>
                            </div>
                        </div>

                        <div id='right'>
                            <img src={furnitureIMG4} alt="Furniture" />
                            <div className="bottomRight-IMG-writeUp">
                                <h6><span style={{color:'#2DC071'}}>5 Items</span></h6>
                                <h2>FURNITURE</h2>
                                <h6>Read More</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection