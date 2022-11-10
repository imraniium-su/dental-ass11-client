import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contex/Authprovider/AuthProvider';
import ReviewRow from './ReviewRow/ReviewRow';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?user_email=${user?.email}`)
    }, [])
    return (
        <div>
            <div className='text-center text-2xl font-semibold bg-slate-200 py-1 rounded'>
                <h2>See All Review</h2>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Name</th>
                                <th>Comment</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                reviews.map(review => <ReviewRow key={review._id} review={review}

                                ></ReviewRow>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Review;