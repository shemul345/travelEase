import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import VehicleCard from '../../components/VehicleCard/VehicleCard';
import { GoArrowUpLeft } from 'react-icons/go';

const AllVehicles = () => {
    const vehicles = useLoaderData();
    const [sortedVehicles, setSortedVehicles] = useState(vehicles);
    const [sortOrder, setSortOrder] = useState('default');

    useEffect(() => {
        let sorted = [...vehicles];

        if (sortOrder === 'lowToHigh') {
            sorted.sort((a, b) => a.pricePerDay - b.pricePerDay);
        } else if (sortOrder === 'highToLow') {
            sorted.sort((a, b) => b.pricePerDay - a.pricePerDay);
        } else {
            sorted = vehicles;
        }

        setSortedVehicles(sorted);
    }, [sortOrder, vehicles]);
    return (
        <div className='max-w-9xl mx-auto mt-10'>
            <p className='text-center'>
                <span className="border border-red-900 w-6 h-0.5 inline-block"></span>
                <span className='font-semibold text-orange-300'>All Vehicles</span>
            </p>
            <h1 className='text-3xl font-bold text-center'>
                Discover all our <span className='text-orange-400'>vehicles</span> in one place.</h1>

            
            {/* Sorting */}
            <div className='max-w-7xl mx-auto'>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 mb-4 gap-3">
                    <p className="text-lg font-semibold">
                        Available Vehicles Now (
                        <span className="text-orange-500 font-bold">{vehicles.length}</span>)
                    </p>

                    {/* Sorting Dropdown */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="sort" className="text-gray-700 font-medium">
                            Sort by:
                        </label>
                        <select
                            id="sort"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                            <option value="default">Default</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='max-w-11/12 mx-auto my-10 grid grid-cols-1 
            md:grid-cols-3 lg:grid-cols-3 gap-5'>
                {
                    sortedVehicles.map(vehicle => <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>)
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