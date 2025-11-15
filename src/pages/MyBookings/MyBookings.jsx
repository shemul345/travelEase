import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Loader from '../../components/Loader/Loader';
import VehicleCard from '../../components/VehicleCard/VehicleCard';
import axios from 'axios';

const MyBookings = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        axios
            .get(`https://travel-ease-server1.vercel.app/myBookings?email=${user.email}`)
            .then(res => {
                setVehicles(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Axios Error:", err);
                setLoading(false);
            });

    }, [user]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <h1 className='text-3xl text-center mt-10 font-semibold'>My <span className='text-orange-400'>Bookings</span></h1>
            <div className='max-w-11/12 mx-auto my-10 grid grid-cols-1 
            md:grid-cols-3 lg:grid-cols-3 gap-5'>
                {
                    vehicles.map(vehicle => (
                        <VehicleCard
                            key={vehicle._id}
                            vehicle={vehicle}
                        />
                    ))
                }
            </div></div>

    );
};

export default MyBookings;
