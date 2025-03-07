import React, { useEffect } from 'react';
import './Blog.css';

import blog1 from '../images/blog1.jpg';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import blog4 from '../images/blog5.jpg';
import blog5 from '../images/blog6.jpg';
import blog6 from '../images/blog7.jpg';
import blog7 from '../images/blog8.jpg';
import blog8 from '../images/blog9.jpg';
import blog9 from '../images/blog11.jpg';
import blog10 from '../images/blog12.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Blogs() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const blogs = [
        { image: blog1, title: "History of Coffee" },
        { image: blog2, title: "About Americano Coffee" },
        { image: blog3, title: "Coffee roasts guide" },
        { image: blog4, title: "Cappuccino recipes that you like" },
        { image: blog5, title: "Traditions of coffee ceremony" },
        { image: blog6, title: "Coffee from around world" },
        { image: blog7, title: "How to store coffee" },
        { image: blog8, title: "How to make an Americano Coffee" },
        { image: blog9, title: "How to brew Coffee" },
        { image: blog10, title: "Caffeine & Health" }
    ];

    return (
        <div className='blogs' id='blogs'>
            <div className='heading text-white' data-aos="fade-down">
                <h1 className='blog_text container'>Blog Three Columns</h1>
                <h5 className='container'>
                    <span className='coffeeking'>CoffeeKing</span> - Blog Three Columns
                </h5>
            </div>

            <div className='container mt-5'>
                <div className='row g-4'>
                    {blogs.map((blog, index) => (
                        <div className='col-md-4' key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                            <div className="card">
                                <img src={blog.image} className="card-img-top image1" alt="Blog" />
                                <div className="card-body">
                                    <h5 className="title card-title">{blog.title}</h5>
                                    <p className="card-text text-dark">
                                        Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu...
                                    </p>
                                    <p className="card-text footer text-dark text-center">
                                        <span className='date'>13</span> September 2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
