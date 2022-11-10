import React from 'react';
import useTitle from '../../hooks/usetitle';
import Banner from './Banner/Banner';
import Meetteam from './Meetteam/Meetteam';
import ServiceHome from './ServiceHome/ServiceHome';
import Services from './Services/Services';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <Meetteam></Meetteam>
        </div>
    );
};

export default Home;