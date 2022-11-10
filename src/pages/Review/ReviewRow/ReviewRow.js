import React, { useEffect, useState } from 'react';
import { } from 'react-icons/fa';

const ReviewRow = ({ review, handleDelete, handleReviewUpdate }) => {
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
                <label htmlFor="my-modal-5" className="btn btn-ghost btn-xs">edit</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Edit your Review</h3>
                        <form onClick={() => handleReviewUpdate((_id))}>
                            <textarea name="review" className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your Review Edit" required></textarea>
                        </form>
                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn">Submit</label>
                        </div>
                    </div>
                </div>
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