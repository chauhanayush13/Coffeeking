import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Gallary.css';

import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import blog4 from '../images/blog5.jpg';
import blog5 from '../images/blog6.jpg';
import blog6 from '../images/blog7.jpg';
import blog7 from '../images/blog8.jpg';
import blog8 from '../images/blog9.jpg';
import blog9 from '../images/blog11.jpg';
import blog10 from '../images/blog12.jpg';

export default function Gallary() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false }); // Initialize AOS with settings
    }, []);

    return (
        <div className='gallary' id='gallary'>
            <div className='heading1 text-white' data-aos="fade-down">
                <h1 className='blog_text container'>Gallery Four Columns</h1>
                <h5 className='container'>
                    <span className='coffeeking1'>CoffeeKing</span> - Blog Four Columns
                </h5>
            </div>

            <div className='container mt-4'>
                <div className='row g-4'>
                    {[blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9, blog10].map((image, index) => (
                        <div className='col-md-3' key={index} data-aos="fade-up">
                            <div className="card">
                                <img src={image} className="card-img-top image" alt="Gallery" />
                                <div className="card-body">
                                    <h5 className="title1 card-title">Gallery Item {index + 1}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
