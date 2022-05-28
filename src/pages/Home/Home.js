import React from 'react';
import Banner from './Banner'
import BusinessSummery from './BusinessSummery';
import OurTools from './OurTools';
import Reviews from './Reviews';
import OurMission from './OurMission'

const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <OurTools></OurTools>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <OurMission></OurMission>
        </div>
    );
};

export default Home;