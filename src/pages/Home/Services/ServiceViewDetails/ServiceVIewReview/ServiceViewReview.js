import React, { useContext } from 'react';
import { AuthContext } from '../../../../../contex/Authprovider/AuthProvider';
import { FaUser, FaSun, FaMoon } from 'react-icons/fa';

const ServiceViewReview = ({ review }) => {
    const { user_photo, user_name, review_t } = review;


    return (
        <div>
            <div className='flex my-3'>
                <div >
                    {review?.user_photo ?
                        <img className='ms-3 d-flex align-items-center justify-content-center rounded-full' style={{ height: '40px' }} src={user_photo} alt="" />
                        : <FaUser></FaUser>

                    }
                </div>
                <div>
                    <h3 className='ml-4'>{user_name}</h3>
                </div>
            </div>
            <h6>Review: {review_t}</h6>
        </div>
    );
};

export default ServiceViewReview;