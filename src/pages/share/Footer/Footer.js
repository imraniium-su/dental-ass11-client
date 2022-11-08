import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white my-6">
            <div>
                <img className='image' src='https://t4.ftcdn.net/jpg/03/02/68/11/360_F_302681154_9HOWdvGLtCKpfwO5B85yESszG7MfmlUl.jpg' alt="" />
                <p> My Dental Care<br />Providing reliable service since 2020</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;