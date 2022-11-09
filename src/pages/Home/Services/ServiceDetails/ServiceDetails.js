import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ServiceDetails = ({ service }) => {
    const { img, title, price, description, rating } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text mb-1">{description.length > 100 ?
                    <>{description.slice(0, 100) + '..'}</> :
                    <>{description}</>}</p>
                <div className='flex justify-between'>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    Review: <FaStar className='text-warning me-2'></FaStar>
                    <span> {rating?.number}</span>
                </div>
                <div className="card-actions justify-end">
                    <Link >
                        <button className="btn btn-info text-white">Add me</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;