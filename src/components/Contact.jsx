import React, { useEffect, useState } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contact_bg from '../images/contact-bg.png';

export default function Contact() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
            AOS.init({ duration: 1000, once: false });
        }, 1500); // Animation delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='contact bg-white' id='contact'>
            {/* Header Section */}
            <div className='heading1 text-white' data-aos={animate ? "fade-up" : ""}>
                <h1 className='blog_text container'>Contact Us</h1>
                <h5 className='container'>
                    <span className='coffeeking1'>CoffeeKing</span> - Contact Us
                </h5>
            </div>

            {/* Contact Details */}
            <div className='contacts container mt-5'>
                <div className='row g-4'>

                    {/* Central Office Info */}
                    <div className='col-md-4' data-aos={animate ? "fade-up" : ""} data-aos-delay="200">
                        <div className="card card1">
                            <div className="card-body">
                                <h2 className='mt-5 mb-5 fw-bold'>Central Office</h2>
                                <p className='mb-5 paragraph'>Nam eu mi eget velit vulputate tempor gravida quis massa. In malesuada condimentum ultrices...</p>
                                <div className='d-flex'>
                                    <i className="bi bi-telephone-fill icon"> </i>
                                    <h5 className='ms-2 fw-bold'>0(800) 890-90-609</h5>
                                </div>
                                <br />
                                <div className='d-flex'>
                                    <i className="bi bi-cup-hot-fill icon"></i>
                                    <h5 className='ms-2 fw-bold'>MYCOFFEESHOP</h5>
                                </div>
                                <br />
                                <div className='d-flex'>
                                    <i className="bi bi-geo-alt-fill icon"></i>
                                    <h5 className='ms-2 fw-bold'>29 Nicolas str, New York, 987597-50</h5>
                                </div>
                                <div className='social mt-5'>
                                    <h5 className='fw-bold'>Social:</h5>
                                    <i className="bi bi-facebook me-3 fs-2 facebook"></i>
                                    <i className="bi bi-twitter me-3 fs-2 twitter"></i>
                                    <i className="bi bi-youtube me-3 fs-2 youtube"></i>
                                    <i className="bi bi-instagram me-3 fs-2 insta"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className='col-md-4' data-aos={animate ? "fade-up" : ""} data-aos-delay="400">
                        <div className="card card2 mt-5">
                            <div className="card-body">
                                <div className="image-content position-relative w-100 d-flex justify-content-center">
                                    <div className="opening-hours-container">
                                        <div className="content-box">
                                            <h2 className="mt-5 fw-bold text-center fs-2 mb-4">Opening Hours</h2>
                                            <ul className="list-unstyled ms-3">
                                                <li><strong>Mon:</strong> 9:00 – 19:00</li>
                                                <li><strong>Tue:</strong> 9:00 – 19:00</li>
                                                <li><strong>Wed:</strong> 9:00 – 19:00</li>
                                                <li><strong>Thu:</strong> 9:00 – 19:00</li>
                                                <li><strong>Fri:</strong> 9:00 – 19:00</li>
                                                <li><strong>Sat:</strong> 11:00 – 16:00</li>
                                                <li><strong>Sun:</strong> CLOSED</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='col-md-4' data-aos={animate ? "fade-up" : ""} data-aos-delay="600">
                        <div className="card card3 mt-5">
                            <div className="card-body">
                                <div className="form-container">
                                    <form>
                                        <div className="form-group">
                                            <label>Your Name</label>
                                            <input type="text" className="form-control" placeholder="Enter your name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Your Email</label>
                                            <input type="email" className="form-control" placeholder="Enter your email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Your Message</label>
                                            <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
                                        </div>
                                        <button type="submit" className="submit-btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map with Zoom-in Animation */}
            <div className='container pb-5' data-aos={animate ? "zoom-in" : ""} data-aos-delay="800">
                <iframe className='mt-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16836.00211166257!2d-73.94533295885718!3d40.74017812495626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25948e1da58b3%3A0x720c87b2e954456e!2sGreenpoint%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1738830914734!5m2!1sen!2sin" width="100%" height="700px" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}
