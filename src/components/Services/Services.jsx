import React from 'react';
import { useSpring } from '@react-spring/web';
import { FaBolt, FaLock, FaShieldAlt } from "react-icons/fa";

const Services = () => {
    // simple fade-in spring
    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 600 },
    });

    return (
        <section
            aria-labelledby="services-title"
            className="py-12 px-4 sm:px-6 lg:px-8 bg-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div style={fadeIn} className="text-center mb-8">
                    <p className='text-center mb-2'>
                        <span className="border border-red-900 w-6 h-0.5 inline-block"></span>
                        <span className='font-semibold text-orange-300 ml-2'>Our Services</span>
                    </p>
                    <h1 className='text-3xl font-bold text-gray-800'>
                        Reliable vehicle rental <span className='text-orange-400'>Services</span> built for speed, safety and secure payments.
                    </h1>
                </div>

                {/* Cards */}
                <div className="relative rounded-2xl overflow-hidden">
                    <div className="relative z-10 px-4 py-10 sm:py-12">
                        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Card 1 */}
                            <article
                                style={fadeIn}
                                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-start gap-4 shadow-2xl hover:shadow-2xl hover:scale-105 transform transition duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
                                    <FaBolt className="w-5 h-5 bg-red-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Fast Response</h3>
                                <p className="text-sm text-gray-600">
                                    Quick booking confirmations and 24/7 customer support to help you on the go.
                                </p>
                                <a
                                    href="/contact"
                                    className="mt-auto inline-block text-sm font-medium text-red-500 hover:text-red-700 underline"
                                >
                                    Learn more
                                </a>
                            </article>

                            {/* Card 2 */}
                            <article
                                style={fadeIn}
                                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-start gap-4 shadow-2xl hover:shadow-2xl hover:scale-105 transform transition duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
                                    <FaLock className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Secure Payment</h3>
                                <p className="text-sm text-gray-600">
                                    Encrypted payments and multiple trusted payment gateways for a safe checkout.
                                </p>
                                <a
                                    href="/payment-info"
                                    className="mt-auto inline-block text-sm font-medium text-red-500 hover:text-red-700 underline"
                                >
                                    Payment info
                                </a>
                            </article>

                            {/* Card 3 */}
                            <article
                                style={fadeIn}
                                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-start gap-4 shadow-2xl hover:shadow-2xl hover:scale-105 transform transition duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-red-500 text-white">
                                    <FaShieldAlt className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Security System</h3>
                                <p className="text-sm text-gray-600">
                                    All vehicles go through verification and regular maintenance checks for your safety.
                                </p>
                                <a
                                    href="/safety"
                                    className="mt-auto inline-block text-sm font-medium text-red-500 hover:text-red-700 underline"
                                >
                                    Safety measures
                                </a>
                            </article>
                        </div>

                        {/* Footer CTA */}
                        <div className="mt-8 flex justify-center">
                            <a
                                href="/allVehicles"
                                className="inline-block border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-5 py-2 rounded-full text-sm font-semibold transition duration-300"
                            >
                                Browse Vehicles
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
