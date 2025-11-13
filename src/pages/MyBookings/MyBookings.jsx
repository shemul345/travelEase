import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Loader from '../../components/Loader/Loader';
import VehicleCard from '../../components/VehicleCard/VehicleCard';

const MyBookings = () => {
    const { user,loading,setLoading } = use(AuthContext);
        const [vehicles, setVehicles] = useState([]);
        useEffect(() => {
            fetch(`http://localhost:3000/myBookings?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setVehicles(data)
                    setLoading(false)
            })
        }, [user, setLoading])
    
    if (loading) {
            return <Loader></Loader>
        }
    return (
        <div className='max-w-11/12 mx-auto my-10 grid grid-cols-1 
            md:grid-cols-3 lg:grid-cols-3 gap-5'>
            {
                vehicles.map(vehicle => <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>)
            }
        </div>
    );
};

export default MyBookings;