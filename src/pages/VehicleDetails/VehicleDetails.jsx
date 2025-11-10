import React from 'react';
import { useLoaderData } from 'react-router';

const VehicleDetails = () => {
    const vehicleData = useLoaderData()
    const vehicle = vehicleData.result
    console.log(vehicle)
    const { _id, coverImage, description, owner, location, vehicleName, userEmail, pricePerDay } = vehicle;
    return (
        <div className='max-w-11/12 mx-auto my-10'>
            <div className='max-w-2/12'></div>
            <div className=' max-w-7/12 grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
                <div>
                    <img className='border border-gray-400 shadow-2xl
                 w-[400px] h-[60vh] p-3 rounded-xl' src={coverImage} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='text-3xl font-semibold'>{vehicleName}</h1>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <h3 className='text-orange-400 italic'>{owner}</h3>
                        <h3 className='text-sm font-semibold'>{ userEmail}</h3>
                    </div>
                    <div className='flex justify-between items-center border-b border-gray-500 mt-10'>
                        <h1 className='text-2xl font-semibold'>Price Per Day: ${pricePerDay}</h1>
                        <p>{location}</p>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className='max-w-2/12'></div>
        </div>
    );
};

export default VehicleDetails;