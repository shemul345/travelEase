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

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path:"/",
                Component:Home
            },
            {
                path: "allVehicles",
                Component:AllVehicles
            },
            {
                path: "addVehicle",
                Component:AddVehicles
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
