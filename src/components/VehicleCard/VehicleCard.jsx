import React from 'react';
import './VehicleCard.css'
import { IoLocationSharp } from 'react-icons/io5';
import { FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router';

const VehicleCard = ({vehicle}) => {
    const { _id,
        coverImage,
        location,
        owner,
        vehicleName,
        availability,
        pricePerDay } = vehicle;
    return (
        <div className="card w-full">
            <div>
                <img className='w-[350px] h-[250px] mx-auto rounded-xl shadow-sm' src={coverImage} alt="" />
            </div>
            <div className="card-details flex justify-between items-center mt-5">
                <p className="text-2xl font-semibold">{vehicleName}</p>
                <p className={`text-body border rounded-3xl py-2 px-5 text-center text-white 
  ${availability === "Available" ? "bg-green-400" : "bg-red-400"}`}>{availability}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-lg italic text-orange-400 font-semibold'>{owner}</p>
                <span className='flex justify-center items-center gap-2'><IoLocationSharp className='text-xl' />{ location}</span>
            </div>
            <h3 className='flex justify-center items-center text-2xl mt-4'>
                <span className='font-bold mr-3'>Price Per Day:</span>
                <span className='text-red-600 text-2xl'>${pricePerDay}</span></h3>
            <Link to={`/vehicleDetails/${_id}`}><button className="card-button">More info</button></Link>
        </div>
    );
};

export default VehicleCard;