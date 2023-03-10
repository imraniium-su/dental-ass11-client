import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = ({ service }) => {
    const { img, title, price, description, rating, _id } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="Shoes" />
                </PhotoView>
            </PhotoProvider></figure>
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
                <div className="card-actions mx-auto">
                    <Link to={`/servicesDetails/${_id}`} >
                        <button className="btn btn-info text-white ">More details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;