import React, { use } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import './VehicleDetails.css'
import { IoLocationSharp } from 'react-icons/io5';
import { GoArrowUpLeft } from 'react-icons/go';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

const VehicleDetails = () => {
    const {user} = use(AuthContext)
    const vehicleData = useLoaderData()
    const navigate = useNavigate();
    const vehicle = vehicleData.result
    console.log(vehicle)
    const { _id, coverImage, description, owner, location, vehicleName, userEmail, pricePerDay } = vehicle;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/vehicles/${_id}`, {
                    method: "DELETE",
                    headers: {
                        'content-type':'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        navigate('/allVehicles')
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                    console.log(error)
                })
                
            }
        });
    }

    const handleBooking = () => {
        fetch("http://localhost:3000/bookings", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...vehicle, booked_by: user.email})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Successfully booked')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='max-w-11/12 mx-auto my-10'>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center'>
                <div className='col-span-1'>
                    <img className='border border-gray-400 shadow-2xl
                 w-[400px] h-[60vh] p-3 rounded-xl' src={coverImage} alt="" />
                </div>
                <div className='col-span-2'>
                    <div>
                        <h1 className='text-3xl font-semibold'>{vehicleName}</h1>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <h3 className='text-orange-400 italic'>{owner}</h3>
                        <h3 className='text-sm font-semibold mr-16 italic text-gray-500'>{ userEmail}</h3>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl font-semibold'>Price Per Day: ${pricePerDay}</h1>
                        <p className='mr-16 flex justify-center items-center gap-2'><IoLocationSharp className='text-xl' />{location}</p>
                    </div>
                    <div className='mt-8 flex justify-left items-center gap-5 border-b border-gray-500 pb-8 mb-8'>
                        <button onClick={handleBooking} className='book border
                         font-semibold rounded-3xl w-[150px]
                          h-[50px]'><span className='booking_text'>Booking Now</span></button>

                        <Link to={`/updateVehicle/${_id}`}>
                            <button className='bg-green-500 hover:bg-green-600 border
                             border-blue-400 font-semibold
                              rounded-3xl w-[100px] h-[50px]'><span className='text-white'>Update</span></button>
                        </Link>

                        <button onClick={handleDelete} className='hover:bg-red-500 hover:text-white duration-300 border font-semibold rounded-3xl w-[100px] h-[50px]'>Delete</button>
                    </div>
                    <div>
                        <p className='italic'><span className='font-semibold'>Description:</span> {description}</p>
                    </div>
                    <div>
                        <Link to="/allVehicles">
                            <h3 className='flex items-center gap-2 text-center my-10 bg-gradient-to-r from-black
                              to-red-600 text-white px-5 py-2 rounded-xl
                                w-[150px] font-semibold shadow-md mx-auto
                                hover:from-red-600 hover:to-black
                                 transition-all duration-300 cursor-pointer'>
                                <GoArrowUpLeft className='text-xl' /> <span>All Vehicles</span></h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleDetails;