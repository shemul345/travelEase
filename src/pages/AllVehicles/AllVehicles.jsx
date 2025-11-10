import React from 'react';
import { useLoaderData } from 'react-router';
import VehicleCard from '../../components/VehicleCard/VehicleCard';

const AllVehicles = () => {
    const vehicles = useLoaderData()
    console.log(vehicles)
    return (
        <div className='max-w-9xl mx-auto mt-10'>
            <p className='text-center'>
                <span className="border border-red-900 w-6 h-0.5 inline-block"></span>
                <span className='font-semibold text-orange-300'>All Vehicles</span>
            </p>
            <h1 className='text-3xl font-bold text-center'>
                Discover all our <span className='text-orange-400'>vehicles</span> in one place.</h1>
            <p>All Vehicles({vehicles.length})</p>
            <div className='max-w-11/12 mx-auto my-10 grid grid-cols-1 
            md:grid-cols-3 lg:grid-cols-3 gap-5'>
                {
                    vehicles.map(vehicle => <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>)
                }
            </div>
        </div>
    );
};

export default AllVehicles;