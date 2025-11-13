import React from 'react';
import Banner from '../../components/Banner/Banner';
import LatestVehicles from '../../components/LatestVehicles/LatestVehicles';
import { useLoaderData } from 'react-router';
import Services from '../../components/Services/Services';
import ClientReviews from '../../components/ClientReviews/ClientReviews';

const Home = () => {
    const latestVehicles = useLoaderData()
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section className='mt-10'>
                <LatestVehicles latestVehicles={latestVehicles}></LatestVehicles>
            </section>
            <section className='mt-10'>
                <Services></Services>
            </section>
            <section>
                <ClientReviews></ClientReviews>
            </section>
        </div>
    );
};

export default Home;