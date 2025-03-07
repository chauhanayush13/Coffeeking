import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/logo.png';
import './Navbar.css'

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false); // State to toggle search bar visibility
  const searchBarRef = useRef(null); // Reference for the search bar element

    const handleSearchToggle = () => {
        setShowSearch(prevState => !prevState); // Toggle search bar visibility
    };

    // Hide the search bar when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
        // Check if the click is outside the search bar and the search icon
        if (searchBarRef.current && !searchBarRef.current.contains(event.target) && !event.target.closest('.bi-search')) {
            setShowSearch(false); // Hide the search bar
        }
        };

        // Add event listener on mount
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on unmount
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar container-fluid navbar-expand-lg navbar-light">
        <div className="container-fluid">
            {/* Logo */}
            <img src={logo} alt="Logo" className="mx-3" />

            {/* Navbar Toggler for small screens */}
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar as */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 text-center ">
                <li className="nav-item">
                <a className="nav-a ms-5  fw-bold fs-5" href="/#home">
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-a ms-5  fw-bold fs-5" href="/#about">
                    About us
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-a ms-5  fw-bold fs-5" href="/#product">
                    Products
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-a ms-5  fw-bold fs-5" href="/#blogs">
                    Blogs
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-a ms-5  fw-bold fs-5" href="/#gallary">
                    Gallery
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-a ms-5  fw-bold fs-5" href="/#contact">
                    Contacts
                </a>
                </li>
            </ul>

            {/* Cart and Search Icons */}
            <div className="ms-5 text-center">
                {/* Cart Icon - Navigate to Cart Page */}
                <a href="/cart" className="btn">
                <i className="bi bi-cart-fill fs-4 text-white"></i>
                </a>

                {/* Search Icon - Toggle Search Bar Visibility */}
                <button onClick={handleSearchToggle} className="btn  ms-4">
                <i className="bi bi-search fs-4 text-white"></i>
                </button>
            </div>
            </div>
        </div>

        {/* Conditionally render the search bar */}
        <div ref={searchBarRef} className={`search-bar ${showSearch ? 'show' : ''}`}>
            <input type="text" className="form-control" placeholder="Search..." />
        </div>
        </nav>
    );
}
