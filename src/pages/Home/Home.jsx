import React from 'react';
import Banner from '../../components/Banner/Banner';
import LatestVehicles from '../../components/LatestVehicles/LatestVehicles';
import { useLoaderData } from 'react-router';

const Home = () => {
    const latestVehicles = useLoaderData()
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section className=''>
                <LatestVehicles latestVehicles={latestVehicles}></LatestVehicles>
            </section>
        </div>
    );
};

export default Home;