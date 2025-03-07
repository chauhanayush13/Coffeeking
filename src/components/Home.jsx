import React, { useEffect, useState } from 'react';
import img2 from '../images/img2.png';
import './Home.css';
import designimage from '../images/designimage.png';
import img3 from '../images/img3.png';
import AboutMarket from './AboutMarket';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
            AOS.init({ duration: 1000, once: false});
        }, 6000); // Animation delay for better effect

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='home' id='home'>
                {/* Hero Section */}
                <div className="hero d-flex flex-column justify-content-center align-items-center vh-100">
                    <img src={img2} alt="Centered" className="img2 img-fluid animation"
                        style={{ width: '80rem' }} data-aos={animate ? "zoom-in" : ""} />

                    <button className="btn1 animation" data-aos={animate ? "zoom-in" : ""} data-aos-delay="400">
                        View Products
                    </button>
                </div>

                {/* Design Image */}
                <div className='design-image' style={{ overflow: 'hidden' }}>
                    <img src={designimage} alt=""/>
                </div>

                {/* About Section */}
                <div className='background bg-white position-relative d-flex'>
                    <img className='img3 img-fluid mx-5' src={img3} alt="" 
                        data-aos={animate ? "fade-right" : ""} data-aos-delay="600" />

                    <div className="about_component position-absolute px-5 py-5 ms-5 my-5"
                        data-aos={animate ? "fade-up" : ""} data-aos-delay="800">
                        <AboutMarket />
                    </div>
                </div>
            </div>
        </>
    );
}
