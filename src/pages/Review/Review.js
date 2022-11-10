import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contex/Authprovider/AuthProvider';
import ReviewRow from './ReviewRow/ReviewRow';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/usetitle';

const Review = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReview] = useState([]);
    useTitle('my review')
    useEffect(() => {
        fetch(`https://assignment-11-dental-server.vercel.app/reviews?user_email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('dentalCare-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel this ');
        if (proceed) {
            fetch(`https://assignment-11-dental-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return logOut()
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {

                        toast.success('Succesfully delete')
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }

    const update = () => {
        fetch(`https://assignment-11-dental-server.vercel.app/reviews?user_email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }

    return (
        <div>

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

                                handleDelete={handleDelete} update={update}></ReviewRow>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Review;