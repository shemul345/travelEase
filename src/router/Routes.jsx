import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import AllVehicles from '../pages/AllVehicles/AllVehicles';
import AddVehicles from '../pages/AddVehicles/AddVehicles';
import MyVehicles from '../pages/MyVehicles/MyVehicles';
import MyBookings from '../pages/MyBookings/MyBookings';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';
import VehicleDetails from '../pages/VehicleDetails/VehicleDetails';
import UpdateVehicle from '../pages/UpdateVehicle/UpdateVehicle';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path:"/",
                Component: Home,
                loader: () => fetch('http://localhost:3000/latestVehicles')
            },
            {
                path: "allVehicles",
                Component: AllVehicles,
                loader: () => fetch('http://localhost:3000/vehicles')
            },
            {
                path: "vehicleDetails/:id",
                element: <PrivateRoute>
                    <VehicleDetails></VehicleDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/vehicles/${params.id}`)
            },
            {
                path: "updateVehicle/:id",
                Component: UpdateVehicle,
                loader: ({ params }) => fetch(`http://localhost:3000/vehicles/${params.id}`)
            },
            {
                path: "addVehicle",
                Component: AddVehicles
            },
            {
                path: "myVehicles",
                Component:MyVehicles
            },
            {
                path: "myBookings",
                Component:MyBookings
            },
            {
                path: "login",
                Component:Login
            },
            {
                path: "register",
                Component: Register
            },
            {
                path: "profile",
                Component:Profile
            }
        ]
    }
]);
