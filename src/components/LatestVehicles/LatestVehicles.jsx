import React from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';

const LatestVehicles = ({ latestVehicles }) => {
    return (
        <div className='max-w-9xl mx-auto mt-10'>
            <p className='text-center'>
                <span className="border border-red-900 w-6 h-0.5 inline-block"></span>
                <span className='font-semibold text-orange-300'>Latest-vehicles</span>
            </p>
            <h1 className='text-3xl font-bold text-center'>Your Next <span className='text-orange-400'>Adventure</span> Starts Here</h1>
            
            <div className='max-w-11/12 mx-auto my-10 grid grid-cols-1 
            md:grid-cols-3 lg:grid-cols-3 gap-5'>
                {
                    latestVehicles.map(vehicle => <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>)
                }
            </div>
        </div>
    );
};

export default LatestVehicles;