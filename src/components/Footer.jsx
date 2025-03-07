import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';
import logo from '../images/logo.png';

export default function Footer() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Delay animation by 2 seconds
        const timer = setTimeout(() => {
            setAnimate(true);
            AOS.init({ duration: 1000, once: true });
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='footer1'>
            <div className="container cards pt-5 row g-5 ms-5">
                <div className='col-md-4' data-aos={animate ? "fade-up" : ""}>
                    <div className="card bg-transparent" style={{ width: '20rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={logo} className="card-img-top img-fluid mb-4" alt="..." style={{ width: '10rem' }} />
                            </h5>
                            <p className="card-text text-light">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a href="#" className="btn button mt-4">Purchase theme</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4' data-aos={animate ? "fade-up" : ""} data-aos-delay="500">
                    <div className="card footer_card2 bg-transparent ms-3" style={{ width: '20rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text">EXPLORE</h5>
                            <div className='d-flex'>
                                <a href="/#home" className="explore mt-4 me-5">Home</a>
                                <a href="/#about" className="explore mt-4 me-5">About Us</a>
                                <a href="/#blogs" className="explore mt-4 me-2">Blogs</a>
                            </div>
                            <div className='d-flex'>
                                <a href="/#product" className="explore mt-4 me-4">Products</a>
                                <a href="/#contact" className="explore mt-4 me-5 ms-1">Contact</a>
                                <a href="/#gallary" className="explore mt-4 ms-2">Gallery</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4' data-aos={animate ? "fade-up" : ""} data-aos-delay="1000">
                    <div className="card footer_card3 bg-transparent ms-5" style={{ width: '20rem' }}>
                        <div className="card-body">
                            <h5 className="card-title text mb-4">CONTACT US</h5>
                            <div className='d-flex'>
                                <i className="bi bi-geo-alt-fill icon"></i>
                                <h6 className='ms-2 text-white'>29 Nicolas str, New York, 987597-50</h6>
                            </div>
                            <br />
                            <div className='d-flex'>
                                <i className="bi bi-telephone-fill icon"></i>
                                <h6 className='ms-2 text-white'>0(800) 890-90-609</h6>
                            </div>
                            <br />
                            <div className='d-flex'>
                                <i className="bi bi-envelope-fill icon"></i>
                                <h6 className='ms-2 text-white'>contact@mycoffeeshop.com</h6>
                            </div>
                            <br />
                            <div className='d-flex'>
                                <i className="bi bi-cup-hot-fill icon"></i>
                                <h6 className='ms-2 text-white'>MYCOFFEESHOP</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='foo'>
                <div className='foo_text text-center'>
                    All Rights Reserved - 2025
                </div>
            </footer>
        </div>
    );
}
