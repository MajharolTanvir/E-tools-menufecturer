import React from 'react';
import Banner from './Banner'
import BusinessSummery from './BusinessSummery';
import OurTools from './OurTools';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>  
            <OurTools></OurTools>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;