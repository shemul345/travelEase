import React from 'react';
import { useLoaderData } from 'react-router';

const VehicleDetails = () => {
    const vehicleData = useLoaderData()
    console.log(vehicleData)
    return (
        <div>
            <h1>This is vehicle details page</h1>
        </div>
    );
};

export default VehicleDetails;