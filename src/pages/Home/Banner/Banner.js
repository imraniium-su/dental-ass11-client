import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="hero  my-10 mx-3 ">
            <div className="hero-content flex-col lg:flex-row  md:col-span-2">
                <div className='relative w-1/2'>
                    <img src='https://media.istockphoto.com/id/1395947934/photo/group-of-dentists-looking-at-camera.jpg?s=612x612&w=0&k=20&c=gjQwNxVvKjWdh04z-b79syNQVm54iYd-O2W521DQ7uQ=' alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src='https://media.istockphoto.com/id/500675660/photo/modern-dental-office-interior.jpg?s=612x612&w=0&k=20&c=2QaSeU1SXG8_NAXwtvj9UFrl-k5SxFgS-az2QK36jsY=' alt='' className=" w-3/5 right-5 top-1/2 absolute border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2 p-4'>
                    <h1 className="text-5xl font-bold my-4"> <span className='text-orange-600'>Dental care</span> <br /> Excellent care <br /> For your teeth</h1>
                    <p className="py-4">Our mission is to provide you and your loved ones with superb dentistry, in a comfortable atmosphere that go hand-in-hand with our up-to-date services. <br /> <br /> Our values encompass our operating philosophy and principles that guide us in our daily actions and decisions, as well as in our interactions with others. </p>
                    <button className="btn btn-info text-white mt-3">Get More Our Service</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;