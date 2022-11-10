import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contex/Authprovider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { setAuthToken } from '../../../apiservice/auth';
import useTitle from '../../../hooks/usetitle';

const Signup = () => {
    const { createUser, updateuserprofile, sigInwithGoogle } = useContext(AuthContext);
    useTitle('signup')
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
                handleUpdateUserprofile(name);
            })
            .catch(err => console.error(err))
    }
    const handleUpdateUserprofile = (name) => {
        const profile = {
            displayName: name
        }
        updateuserprofile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    const handleGoogleSingIn = () => {
        sigInwithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero w-full my-16">
            <div className="hero-content gap-12 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left ml-4">

                    <img className='w-3/4 ml-6' src='https://speechtext.ai/static/img/signup-image.png' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-10">
                    <h1 className="text-5xl font-bold text-center">Sign Up </h1>
                    <form onSubmit={handleSignup} className="card-body">
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
                            <input className='btn btn-info text-white' type="submit" value='Sign Up' />

                        </div>
                    </form>
                    <p className='text-center'>Have an Account <Link className='text-orange-600 font-bold' to='/login'> Log In</Link></p>
                    <button onClick={handleGoogleSingIn} className='btn bg-slate-400 mx-10 mt-3'><FaGoogle></FaGoogle><span className='mx-2'> login with Google</span> </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;