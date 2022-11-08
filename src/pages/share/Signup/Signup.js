import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="hero w-full my-16">
            <div className="hero-content gap-12 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left ml-4">

                    <img className='w-3/4 ml-6' src='https://speechtext.ai/static/img/signup-image.png' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-10">
                    <h1 className="text-5xl font-bold text-center">Sign Up </h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value='Sign Up' />

                        </div>
                    </form>
                    <p className='text-center'>Have an Account <Link className='text-orange-600 font-bold' to='/login'> Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;