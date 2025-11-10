import React from 'react';
import { Link, useLoaderData } from 'react-router';
import VehicleCard from '../../components/VehicleCard/VehicleCard';
import { GoArrowUpLeft } from 'react-icons/go';

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
            <p className='ml-20 text-xl font-semibold mt-5'>
                Available Vehicles Now (<span className='text-orange-500 font-bold'>{vehicles.length}</span>)</p>
            <div className='max-w-11/12 mx-auto my-10 grid grid-cols-1 
            md:grid-cols-3 lg:grid-cols-3 gap-5'>
                {
                    vehicles.map(vehicle => <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>)
                }
            </div>
            <div>
                <Link to="/">
                    <h3 className='flex items-center gap-2 text-center my-10 bg-gradient-to-r from-black
                              to-red-600 text-white px-5 py-2 rounded-xl
                                w-[150px] font-semibold shadow-md mx-auto
                                hover:from-red-600 hover:to-black
                                 transition-all duration-300 cursor-pointer'>
                        <GoArrowUpLeft className='text-xl' /> <span>Go Home</span></h3>
                </Link>
            </div>
        </div>
    );
};

export default AllVehicles;