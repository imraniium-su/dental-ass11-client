import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contex/Authprovider/AuthProvider';
import ReviewRow from './ReviewRow/ReviewRow';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?user_email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this ');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('delete successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h2>review:{reviews.length}</h2>
            <div className='text-center text-2xl font-semibold bg-slate-200 py-1 rounded mb-4'>
                <h2>See All Review</h2>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Service</th>
                            <th>Comments</th>
                            <th>Customer Name</th>
                            <th>Users</th>
                            <th>Update</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(review => <ReviewRow key={review._id} review={review}

                                handleDelete={handleDelete}></ReviewRow>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Review;