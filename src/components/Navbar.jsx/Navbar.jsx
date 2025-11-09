import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li><NavLink to={"/"}><GoHomeFill />Home</NavLink></li>
        <li><NavLink to={"/allVehicles"}><GoHomeFill />All Vehicles</NavLink></li>
        <li><NavLink to={"/addVehicle"}><GoHomeFill />Add Vehicle</NavLink></li>
        <li><NavLink to={"/myVehicles"}><GoHomeFill />My Vehicles</NavLink></li>
        <li><NavLink to={"/myBookings"}><GoHomeFill />My Bookings</NavLink></li>
    </>
    return (
        <div className="navbar py-2 px-8 min-h-0 z-1 shadow-xl rounded-full glass-card max-w-7xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;