import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceChart from './ServiceChart/ServiceChart';
import ServiceDetails from './ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>OUR DENTAL SERVICES</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 mx-4'>
                {
                    services.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                }
            </div>

        </div>
    );
};

export default Services;