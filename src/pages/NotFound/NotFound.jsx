import React from 'react';
import { useSpring } from '@react-spring/web';
import { Link } from 'react-router';

const NotFound = () => {
    const bounce = useSpring({
        from: { transform: 'translateY(-20px)', opacity: 0 },
        to: { transform: 'translateY(0px)', opacity: 1 },
        config: { tension: 180, friction: 12 },
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-100 via-white to-red-100 px-4 text-center">
            <h1
                style={bounce}
                className="text-9xl font-extrabold text-red-500 mb-6"
            >
                404
            </h1>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Oops! Page Not Found
            </h2>

            <p className="text-gray-600 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                Don’t worry, you can go back to the homepage and continue browsing.
            </p>

            <Link
                to="/"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
