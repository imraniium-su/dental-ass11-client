import React, { useEffect, useState } from 'react';
import { } from 'react-icons/fa';

const ReviewRow = ({ review, handleDelete }) => {
    const { review_t, user_email, user_name, service_id, _id } = review;
    const [reviewService, setReviewservice] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service_id}`)
            .then(res => res.json())
            .then(data => setReviewservice(data));
    }, [])

    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={reviewService?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {reviewService.title}
            </td>
            <td>{review_t}</td>
            <td>{user_name}</td>
            <td>{user_email}</td>
            <th>
                <button className="btn btn-ghost btn-xs">edit</button>
            </th>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>delete</button>
                </label>
            </th>
        </tr>
    );
};

export default ReviewRow;