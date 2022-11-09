import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contex/Authprovider/AuthProvider';
import './Header.css'
const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handlelogOut = () => {
        logOut()
            .then()
            .catch();
    }
    const menuitem = <>
        <li className='font-bold text-1xl'><Link to='/'>Home</Link></li>
        <li className='font-bold text-1xl'><Link to='/services'>Service</Link></li>

        {
            user?.email ?
                <>
                    <li className='font-semibold'>
                        <button onClick={handlelogOut} className='btn-ghost'>log Out</button>
                    </li>
                </>
                :
                <>

                    <li className='font-bold text-1xl'><Link to='/login'>Log In</Link></li>
                    <li className='font-bold text-1xl'><Link to='/signup'>Sign Up</Link></li>
                </>
        }


    </>

    // {user?.email ?
    //     <>
    //         <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
    //         <li className='font-semibold'>
    //             {/* <button onClick={handlelogOut} className='btn-ghost'>log out</button> */}
    //             <button className='btn-ghost'>log out</button>
    //         </li>
    //     </>
    //     :
    //     <>
    //         <li className='font-semibold'><Link to='/login'>Login</Link></li>
    //         <li className='font-semibold'><Link to='/signup'>Sign Up</Link></li>
    //     </>
    // }
    return (
        <div className="navbar h-20 my-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuitem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold bg-white sad">
                    <img className='image' src='https://t4.ftcdn.net/jpg/03/02/68/11/360_F_302681154_9HOWdvGLtCKpfwO5B85yESszG7MfmlUl.jpg' alt="" /> Dental Care
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuitem}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/blog'><button className="btn btn-outline btn-info">My Blog</button></Link>
            </div>
        </div>
    );
};

export default Header;