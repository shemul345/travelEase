import React from 'react';
import { FaCar, FaUserAlt } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { IoMdAddCircle } from 'react-icons/io';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.jpg'
import './Navbar.css';

const Navbar = () => {
    const links = <>
        <li><NavLink to={"/"}><GoHomeFill className='text-xl'/>Home</NavLink></li>
        <li><NavLink to={"/allVehicles"}><FaCar className='text-xl' />All Vehicles</NavLink></li>
        <li><NavLink to={"/addVehicle"}><IoMdAddCircle className='text-xl' />Add Vehicle</NavLink></li>
        <li><NavLink to={"/myVehicles"}>My Vehicles</NavLink></li>
        <li><NavLink to={"/myBookings"}>My Bookings</NavLink></li>
    </>
    return (
        <div className="navbar py-2 px-8 min-h-0 z-1 shadow-sm rounded-full glass-card max-w-7xl mx-auto">
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
                <div className='flex justify-center items-center gap-1'>
                    <img className='w-[50px]' src={logo} alt="" />
                    <a href='/' className="text-3xl font-bold bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">
                        TravelEase
                    </a>  
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <a href='/profile' className="text-3xl">
                    <FaUserAlt />
                </a>
                <Link to="login">
                    <button className='btn-primary w-[100px]'>
                        <span className='text'> Login
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;