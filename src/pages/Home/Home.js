import React from 'react';
import Banner from './Banner/Banner';
import Meetteam from './Meetteam/Meetteam';
import ServiceHome from './ServiceHome/ServiceHome';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <Meetteam></Meetteam>
        </div>
    );
};

export default Home;