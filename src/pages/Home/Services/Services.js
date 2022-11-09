import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceChart from './ServiceChart/ServiceChart';
import ServiceDetails from './ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>OUR DENTAL SERVICES</h1>
            <p className='text-center mt-2'>We provide specialist-led dental care in paediatric and special care dentistry. The care is provided under the terms of the <br /> National Health Service (NHS) and current charges are displayed on posters in waiting areas.  </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 mx-4'>
                {
                    services.map(service => <ServiceDetails key={service._id} service={service}></ServiceDetails>)
                }
            </div>

        </div>
    );
};

export default Services;