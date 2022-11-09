import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white my-6">
            <div>
                <img className='image' src='https://t4.ftcdn.net/jpg/03/02/68/11/360_F_302681154_9HOWdvGLtCKpfwO5B85yESszG7MfmlUl.jpg' alt="" />
                <p> My Dental Care<br />Providing reliable service since 2000</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Dental Scaling</a>
                <a className="link link-hover">Dental Filling</a>
                <a className="link link-hover">Crown & Bridge</a>
                <a className="link link-hover">Teeth Whitening</a>
                <a className="link link-hover">Wisdom Teeth Removal</a>
                <a className="link link-hover">Gum Treatment</a>
            </div>
            <div>
                <span className="footer-title">ConTact</span>
                <a className="link link-hover">Phone: +0134455556</a>
                <a className="link link-hover">Email: dentalcare@gmail.com</a>
                <a className="link link-hover">Seri gombak, jalan Kuantan</a>
                <a className="link link-hover">Gombak ,Selangor</a>
            </div>
            <div>
                <span className="footer-title">We Open Everyday!</span>
                <p> Sunday -FRiday : 9am - 8pm</p>
                <p>Saturday: 9am - 8pm</p>
                <p>Public Holiday : 9am - 6pm</p>
            </div>
        </footer>
    );
};

export default Footer;