import React from 'react';
import Banner from '../../components/Banner/Banner';
import LatestVehicles from '../../components/LatestVehicles/LatestVehicles';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section className=''>
                <LatestVehicles></LatestVehicles>
            </section>
        </div>
    );
};

export default Home;