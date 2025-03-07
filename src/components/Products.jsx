import React, { useEffect, useState } from 'react';
import './Product.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import coffee_item1 from '../images/coffee_item1.jpg';
import coffee_item2 from '../images/coffee_item2.jpg';
import coffee_item3 from '../images/coffee_item3.jpg';
import coffee_item4 from '../images/coffee_item4.jpg';
import coffee_item5 from '../images/coffee_item5.jpg';
import coffee_item6 from '../images/coffee_item6.jpg';

export default function Products() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
            AOS.init({ duration: 1000, once: false});
        }, 2000); // Animation delay

        return () => clearTimeout(timer);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };

    return (
        <div className='product' id='product'>
            <div className='product_heading text-center position-relative'>
                <h1 className="background-text">Products</h1>
                <h5 className='choice' data-aos={animate ? "fade-up" : ""} data-aos-delay="200">Choose Your Coffee</h5>
                <h1 className='recent_products fw-bold' data-aos={animate ? "fade-up" : ""} data-aos-delay="400">Recent Products</h1>
            </div>

            <br /> <br />
            
            <div className="slider-container" data-aos={animate ? "zoom-in" : ""} data-aos-delay="600">
                <Slider {...settings}>
                    {[coffee_item1, coffee_item2, coffee_item3, coffee_item4, coffee_item5, coffee_item6].map((item, index) => (
                        <div key={index} data-aos={animate ? "fade-up" : ""} data-aos-delay={index * 200}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={item} className="card-img-top" alt="Coffee product" />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bolder">Coffee Item {index + 1}</h5>
                                    <p className="card-text fs-3 fw-bold text-center">$13.00</p>
                                    <a href="#" className="btn button">
                                        <i className="bi bi-cart-fill fs-6 text-white"></i> Add to Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
