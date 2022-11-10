import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contex/Authprovider/AuthProvider';
import { FaUser, FaSun, FaMoon } from 'react-icons/fa';
import ServiceViewReview from './ServiceVIewReview/ServiceViewReview';
import useTitle from '../../../../hooks/usetitle';

const ServiceViesDetails = () => {
    const { _id, title, img, description, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState([]);
    useTitle('view details')
    useEffect(() => {
        fetch(`https://assignment-11-dental-server.vercel.app/reviews?user_email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])
    // console.log(user);

    const handleSubmit = (event) => {
        event.preventDefault();
        const review_t = event.target.review.value;
        const service_id = _id;
        const user_id = user.uid;
        const user_email = user.email;
        const user_name = user.displayName;
        const user_photo = user.photoURL;

        const review = { review_t, service_id, user_id, user_email, user_name, user_photo }
        fetch('https://assignment-11-dental-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed Successfully')

                }
            })



    }

    return (
        <div>
            <div className='rounded w-8/12 mx-auto p-3 bg-slate-200'>
                <h2 className='text-3xl font-bold text-center mb-3'>{title}</h2>
                <div className='flex justify-center '>
                    <img className='rounded ' src={img} alt="" />
                </div>
                <div className='text-center font-bold '>
                    <p className='my-3'>{description}</p>
                    <p>Price: $ {price}</p>

                </div>
            </div>
            <div className='my-10'>
                <div className='bg-slate-200 rounded py-1 mx-4'>
                    <h2 className='text-3xl text-center font-semibold mb-4'>Review</h2>
                </div>

                <div className='p-2  my-2 rounded mx-2'>
                    {
                        reviews.map(review => <ServiceViewReview key={review._id} review={review}></ServiceViewReview>)
                    }
                </div>

                <form onSubmit={handleSubmit} >

                    <textarea name="review" className="textarea textarea-bordered h-24 w-full mt-4 mx-2" placeholder="Your Review" required></textarea>

                    <input className='btn mt-2 ml-2' type="submit" value="Add review" />
                </form>
            </div>
        </div>
    );
};

export default ServiceViesDetails;