import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className="carousel w-full my-6 ">
            <div id="slide1" className="carousel-item relative w-full ">

                <img src="https://dagigathermofoil.com/wp-content/uploads/2016/03/healthcare2.jpg"
                    className="w-full rounded  " />

                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Excellent <br /> Dental care <br /> Solution
                    </h1>
                </div>

                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                    <Link to='/services'><button className="btn btn-info mr-5 text-white">Discover More</button></Link>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkOTgHsU37Bsnvsh-S-1rZqyn5x7qG3QUvA&usqp=CAU" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Excellent <br /> Dental care <br /> Solution
                    </h1>
                </div>

                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                    <button className="btn btn-info mr-5 text-white">Discover More</button>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://myarlingtondental.com/wp-content/uploads/2019/11/regular-checkups-1.jpg" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Excellent <br /> Dental care <br /> Solution
                    </h1>
                </div>

                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                    <button className="btn btn-info mr-5 text-white">Discover More</button>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;