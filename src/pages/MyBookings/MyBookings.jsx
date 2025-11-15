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
            .get(`http://localhost:3000/myBookings?email=${user.email}`)
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
        </div>
    );
};

export default MyBookings;
