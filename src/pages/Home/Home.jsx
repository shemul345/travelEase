import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Banner from '../../components/Banner/Banner';
import LatestVehicles from '../../components/LatestVehicles/LatestVehicles';
import { useLoaderData } from 'react-router';
import Services from '../../components/Services/Services';
import ClientReviews from '../../components/ClientReviews/ClientReviews';
import Aos from 'aos';

const Home = () => {
    const latestVehicles = useLoaderData()

    useEffect(() => {
            Aos.init({
                duration: 1000,
                once: false,
                mirror: true,
            });
        }, []);
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section className='mt-10'>
                <LatestVehicles latestVehicles={latestVehicles}></LatestVehicles>
            </section>
            <section data-aos="fade-up" className='mt-10'>
                <Services></Services>
            </section>
            <section data-aos="fade-down">
                <ClientReviews></ClientReviews>
            </section>
        </div>
    );
};

export default Home;