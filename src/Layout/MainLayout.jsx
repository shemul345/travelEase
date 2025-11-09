import React from 'react';
import Navbar from '../components/Navbar.jsx/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <nav className='max-w-9xl mx-auto'>
                <Navbar></Navbar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                
            </footer>
        </div>
    );
};

export default MainLayout;