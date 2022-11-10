import React, { useEffect, useState } from 'react';
import { } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ReviewRow = ({ review, handleDelete, update }) => {
    const { review_t, user_email, user_name, service_id, _id } = review;
    const [reviewService, setReviewservice] = useState({});
    useEffect(() => {
        fetch(`https://assignment-11-dental-server.vercel.app/services/${service_id}`)
            .then(res => res.json())
            .then(data => setReviewservice(data));
    }, [])

    const handleReviewUpdate = (event) => {
        event.preventDefault();
        const review = event.target.review_t.value;
        console.log(review, _id);

        fetch(`https://assignment-11-dental-server.vercel.app/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ review_t: { review } })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Updated')
                update();

            })
    }

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
                        <form onSubmit={handleReviewUpdate}>
                            <textarea name="review_t" className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your Review Edit" defaultValue={review_t} required></textarea>
                            <div className="modal-action">
                                <label htmlFor="my-modal-5" className="btn">Close</label>
                                <input type="submit" value="Submit" className='btn' />
                            </div>
                        </form>
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