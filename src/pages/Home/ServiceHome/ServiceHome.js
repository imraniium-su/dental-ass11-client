import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceChart from '../Services/ServiceChart/ServiceChart';

const ServiceHome = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-11-dental-server.vercel.app/services?size=${3}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className=' '>
            <h1 className='text-4xl font-bold text-center'>DENTAL SERVICES</h1>
            <p className='text-center mt-2'>We provide specialist-led dental care in paediatric and special care dentistry. The care is provided under the terms of the <br /> National Health Service (NHS) and current charges are displayed on posters in waiting areas.  </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 '>
                {
                    services.map(service => <ServiceChart key={service._id} service={service}></ServiceChart>)
                }
            </div>
            <div className="card-actions flex justify-center">
                <Link to='/services' >
                    <button className="btn btn-info text-white "> See More Services.....</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceHome;