import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contex/Authprovider/AuthProvider';

const ServiceViesDetails = () => {
    const { _id, title, img, description, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const review_t = event.target.review.value;
        const service_id = _id;
        const user_id = user.uid;
        const user_email = user.email;
        const user_name = user.displayName;
        const user_photo = user.image;

        const review = { review_t, service_id, user_id, user_email, user_name, user_photo }
        fetch('http://localhost:5000/reviews', {
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
                <div className='bg-slate-200 rounded py-1'>
                    <h2 className='text-3xl text-center font-semibold mb-4'>Review</h2>
                </div>
                <form onSubmit={handleSubmit} >

                    <textarea name="review" className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your Review" required></textarea>

                    <input className='btn mt-2' type="submit" value="Add review" />
                </form>
            </div>
        </div>
    );
};

export default ServiceViesDetails;