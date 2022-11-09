import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceViesDetails = () => {
    const { title, img, description, price } = useLoaderData();

    return (
        <div>
            <div className='rounded w-8/12 mx-auto'>
                <h2 className='text-3xl font-bold text-center mb-3'>{title}</h2>
                <div className='flex justify-center '>
                    <img className='rounded ' src={img} alt="" />
                </div>
                <div className='text-center font-bold '>
                    <p className='my-3'>{description}</p>
                    <p>Price: $ {price}</p>

                </div>
            </div>
        </div>
    );
};

export default ServiceViesDetails;