import React from 'react';
import { Link } from 'react-router-dom';

const ServiceChart = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to='/services' >
                        <button className="btn btn-info text-white">More details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceChart;