// import React, { use } from 'react';
// import { FaCar, FaUser, FaUserAlt } from 'react-icons/fa';
// import { GoHomeFill } from 'react-icons/go';
// import { IoMdAddCircle } from 'react-icons/io';
// import { Link, NavLink } from 'react-router';
// import logo from '../../assets/logo.jpg'
// import './Navbar.css';
// import { AuthContext } from '../../contexts/AuthContext';
// import { IoLogIn, IoLogOut } from 'react-icons/io5';

// const Navbar = () => {

//     const { user, logOut } = use(AuthContext)
//     const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

//     useEffect(() => {
//         const html = document.querySelector('html')
//         html.setAttribute("data-theme", theme)
//         localStorage.setItem("theme", theme)
//     }, [theme])


//     const handleTheme = (checked) => {
//         setTheme(checked ? "dark" : "light")
//         const handleTheme = (checked) => {
//             setTheme(checked ? "dark" : "light")
//         }
    
//     const links = <>
//         <li><NavLink to={"/"}><GoHomeFill className='text-xl'/>Home</NavLink></li>
//         <li><NavLink to={"/allVehicles"}><FaCar className='text-xl' />All Vehicles</NavLink></li>
//         <li><NavLink to={"/addVehicle"}><IoMdAddCircle className='text-xl' />Add Vehicle</NavLink></li>
//         <li><NavLink to={"/myVehicles"}>My Vehicles</NavLink></li>
//         <li><NavLink to={"/myBookings"}>My Bookings</NavLink></li>
//     </>
    
//     return (
//         <div className="navbar py-2 px-8 min-h-0 z-1 shadow-sm rounded-full glass-card max-w-7xl mx-auto">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                         {links}
//                     </ul>
//                 </div>
//                 <div className='flex justify-center items-center gap-1'>
//                     <img className='w-[50px]' src={logo} alt="" />
//                     <a href='/' className="text-3xl font-bold bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">
//                         TravelEase
//                     </a>
//                 </div>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {links}
//                 </ul>
//             </div>
//             <div className="navbar-end gap-3">
//                 {user ? (
//                     <div className="dropdown dropdown-end z-50">
//                         <div
//                             tabIndex={0}
//                             role="button"
//                             className="btn btn-ghost btn-circle avatar"
//                         >
//                             <div className="w-9 border-2 border-gray-300 rounded-full">
//                                 <img
//                                     alt="Tailwind CSS Navbar component"
//                                     referrerPolicy="no-referrer"
//                                     src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
//                                 />
//                             </div>
//                         </div>
//                         <ul
//                             tabIndex="-1"
//                             className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
//                         >
//                             <div className=" pb-3 border-b border-b-gray-200">
//                                 <li className="text-sm font-bold">{user.displayName}</li>
//                                 <li className="text-xs">{user.email}</li>
//                             </div>
//                             <li className="mt-3">
//                                 <Link to={"/profile"}>
//                                     <FaUser /> Profile
//                                 </Link>
//                             </li>

//                             <li>
//                                 <Link to={"/my-models"}>
//                                     My Models
//                                 </Link>
//                             </li>

//                             <li >
//                                 <Link to={"/my-downloads"}>
//                                     My Downloads
//                                 </Link>
//                             </li>

//                             <input
//                                 onChange={(e) => handleTheme(e.target.checked)}
//                                 type="checkbox"
//                                 defaultChecked={localStorage.getItem('theme') === "dark"}
//                                 className="toggle" />

//                             <li>
//                                 <a>
//                                     {" "}
//                                     <FaGear /> Settings
//                                 </a>
//                             </li>
//                             <li>
//                                 <button
//                                     onClick={logOut}
//                                     className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
//                                 >
//                                     <IoLogOut /> Logout
//                                 </button>
//                             </li>
//                         </ul>
//                     </div>
//                 ) : (
//                     <Link
//                         to={"/auth/login"}
//                         className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
//                     >
//                         {" "}
//                         <IoLogIn /> Login
//                     </Link>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;








import React, { useState, useEffect, useContext } from 'react'; // ✅ changed: import specific hooks instead of `use`
import { FaCar, FaUser, FaUserAlt, FaCog as FaGear } from 'react-icons/fa'; // ✅ added FaGear alias
import { GoHomeFill } from 'react-icons/go';
import { IoMdAddCircle } from 'react-icons/io'; // ✅ changed: use react-router-dom
import logo from '../../assets/logo.jpg'
import './Navbar.css';
import { AuthContext } from '../../contexts/AuthContext';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    // ✅ changed: useContext instead of use()
    const { user, logOut } = useContext(AuthContext)

    // ✅ changed: useState hook (was missing)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    useEffect(() => {
        const html = document.querySelector('html')
        if (html) html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])


    // ✅ FIXED: removed nested duplicate handleTheme and closed braces properly
    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }

    const links = <>
        <li><NavLink to={"/"}><GoHomeFill className='text-xl' />Home</NavLink></li>
        <li><NavLink to={"/allVehicles"}><FaCar className='text-xl' />All Vehicles</NavLink></li>
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
            <div className="navbar-end gap-3">
                {user ? (
                    <div className="dropdown dropdown-end z-50">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-9 border-2 border-gray-300 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    referrerPolicy="no-referrer"
                                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                        >
                            <div className=" pb-3 border-b border-b-gray-200">
                                <li className="text-sm font-bold">{user.displayName}</li>
                                <li className="text-xs">{user.email}</li>
                            </div>
                            <li className="mt-3"><NavLink to={"/profile"}><FaUser />Profile</NavLink></li>
                            <li><NavLink to={"/addVehicle"}><IoMdAddCircle className='text-xl' />Add Vehicle</NavLink></li>
                            <li><NavLink to={"/myVehicles"}>My Vehicles</NavLink></li>
                            <li><NavLink to={"/myBookings"}>My Bookings</NavLink></li>


                            <input
                                onChange={(e) => handleTheme(e.target.checked)}
                                type="checkbox"
                                defaultChecked={localStorage.getItem('theme') === "dark"}
                                className="toggle my-2" />

                            <li>
                                <a>
                                    <FaGear /> Settings
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={logOut}
                                    className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
                                >
                                    <IoLogOut /> Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                        <Link to='/login'>
                            <button className='btn-primary w-[100px]'>
                                <span className='text'>Login</span>
                        </button>
                        </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;



