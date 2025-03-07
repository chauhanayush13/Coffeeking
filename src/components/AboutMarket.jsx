import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import sign from '../images/sign-1.png';
import about_icon_1 from '../images/about-icon-1.png';
import about_icon_2 from '../images/about-icon-2.png';
import about_icon_3 from '../images/about-icon-3.png';
import about_icon_4 from '../images/about-icon-4.png';
import './AboutMarket.css';

export default function AboutMarket() {
    useEffect(() => {
        AOS.init({ duration: 1000 , once:false }); // Animation duration: 1s
    }, []);

    return (
        <div className="about container d-flex" id='about'>
            {/* Header Section */}
            <div data-aos="fade-right">
                <h2 className="who">Who we are</h2>
                <h1 className="about_market">About market</h1>
                <p className="para my-5">
                    Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna
                    aliquet ultricies. Praesent gravida hendrerit ex, nec eleifend sem convallis vitae.
                </p>
                <img src={sign} alt="Signature" className="sign" />
            </div>

            {/* Features Grid */}
            <div>
                <div className="features d-flex">
                    <div className="div1" data-aos="fade-up">
                        <img src={about_icon_1} className="my-2" alt=''/>
                        <h3 className="titles">The best World sorts</h3>
                        <p className="para1">
                            Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget
                            magna aliquet ultricies.
                        </p>
                    </div>

                    <div className="div2" data-aos="fade-up" data-aos-delay="200">
                        <img src={about_icon_2} className="my-2" alt=''/>
                        <h3 className="titles">Many points of sale</h3>
                        <p className="para1">
                            Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget
                            magna aliquet ultricies.
                        </p>
                    </div>
                </div>

                <div className="features d-flex">
                    <div className="div3" data-aos="fade-up" data-aos-delay="400">
                        <img src={about_icon_3} className="my-2" alt=''/>
                        <h3 className="titles">Professional baristas</h3>
                        <p className="para1">
                            Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget
                            magna aliquet ultricies.
                        </p>
                    </div>

                    <div className="div4" data-aos="fade-up" data-aos-delay="600">
                        <img src={about_icon_4} className="my-2" alt=''/>
                        <h3 className="titles">24/7 fast delivery</h3>
                        <p className="para1">
                            Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget
                            magna aliquet ultricies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
