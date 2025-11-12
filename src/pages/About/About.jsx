import Aos from 'aos';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import "aos/dist/aos.css";
import Loader from '../../components/Loader/Loader';

const About = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const { loading } = use(AuthContext);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, []);

    if (loading) {
        return <Loader />;
    }

    const faqs = [
        {
            q: "How do I book a vehicle?",
            a: "Search your city and dates, choose a vehicle, follow the simple booking steps and confirm. You will get an email and SMS confirmation with pickup details."
        },
        {
            q: "What is the cancellation policy?",
            a: "Cancellations made 48+ hours before pickup receive a full refund. For last-minute cancellations different rules may apply—please check the vehicle details during checkout."
        },
        {
            q: "Are the vehicles insured and verified?",
            a: "Yes. All listed vehicles go through owner verification and regular maintenance checks. Many options include basic insurance—check each listing for details."
        }
    ];

    return (
        <main data-aos="fade-down" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">
            {/* Banner */}
            <section className="relative rounded-xl overflow-hidden shadow-md">
                <img
                    src={"https://i.ibb.co.com/fzRfKJCn/car-showroom-04.jpg"}
                    alt="TravelEase banner"
                    className="w-full h-56 sm:h-72 md:h-80 lg:h-[65vh] object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center">
                    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">About TravelEase</h1>
                        <p className="mt-2 text-sm sm:text-base text-gray-100 max-w-3xl">
                            We make vehicle rental simple, transparent and reliable — whether you need a daily ride,
                            weekend getaway car or a premium vehicle for special occasions.
                        </p>
                        <div className="mt-4">
                            <a
                                href="/allVehicles"
                                className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-sm"
                            >
                                Browse Vehicles
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three feature sections */}
            <section className="mt-16 space-y-12">
                {/* Section 1: Mission */}
                <div data-aos="fade-up" className="flex flex-col lg:flex-row items-center gap-6">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-xl sm:text-2xl font-bold">Our Mission</h2>
                        <p className="mt-3 text-gray-600">
                            To deliver an easy, honest and safe vehicle rental experience across cities — backed by
                            responsive support and thoroughly maintained vehicles.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li>• Transparent pricing with no hidden fees</li>
                            <li>• Verified owners and quality checks</li>
                            <li>• Fast booking & 24/7 support</li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={"https://i.ibb.co.com/jkZy78b5/5b66b6fc-1ccb-405d-ba4b-e9bcd56068a7.jpg"}
                                alt="mission"
                                className="object-cover w-full h-44 sm:h-56 md:h-64"
                            />
                            <div className="absolute top-3 bg-white
                             px-3 py-1 rounded-full text-sm font-medium shadow-2xl">
                                Trusted
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: How It Works */}
                <div data-aos="fade-down" className="flex flex-col-reverse lg:flex-row items-center gap-6 mt-16">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-xl sm:text-2xl font-bold">How It Works</h2>
                        <p className="mt-3 text-gray-600">
                            Find the right vehicle in three simple steps: search, book and pick-up. Everything is handled online so you can focus on your journey.
                        </p>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                            <div className="p-3 bg-gray-50 rounded-lg text-center shadow-sm">
                                <div className="font-semibold">1. Search</div>
                                <div className="text-xs text-gray-500 mt-1">Pick city, date and car type</div>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-lg text-center shadow-sm">
                                <div className="font-semibold">2. Book</div>
                                <div className="text-xs text-gray-500 mt-1">Confirm and pay securely</div>
                            </div>
                            <div className="p-3 bg-gray-50 rounded-lg text-center shadow-sm">
                                <div className="font-semibold">3. Pickup</div>
                                <div className="text-xs text-gray-500 mt-1">Collect from designated point</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-md">
                            <img
                                src={"https://i.ibb.co.com/DgtV6kYJ/undraw-programming-j1zw.png"}
                                alt="how it works"
                                className="object-cover w-full h-44 sm:h-56 md:h-64"
                            />
                            <div className="absolute bottom-1 right-2
                             bg-white/80 px-2 py-1 rounded text-sm">Fast & Simple</div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Fleet */}
                <div data-aos="fade-up" className="relative bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 shadow-sm overflow-hidden">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="w-full lg:w-2/3">
                            <h2 className="text-xl sm:text-2xl font-bold">Our Fleet</h2>
                            <p className="mt-3 text-gray-600">
                                From compact city cars to spacious SUVs and premium sedans — choose the vehicle that fits your trip and wallet.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-gray-600">
                                <li>• Economy cars for budget-friendly travel</li>
                                <li>• Family-friendly SUVs and vans</li>
                                <li>• Luxury options for special occasions</li>
                            </ul>
                        </div>

                        <div className="w-full lg:w-1/3 relative mt-4 lg:mt-0 flex justify-center lg:justify-end">
                            <div className="w-48 sm:w-56 md:w-64 h-36 sm:h-40 md:h-44 rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src={"https://i.ibb.co.com/fYgcrW9h/aston-martin-2118857-1280.jpg"}
                                    alt="fleet"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="hidden lg:block absolute -left-24 top-8 w-36 h-36 bg-red-50 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ / Q&A */}
            <section data-aos="fade-down" className="mt-10">
                <h3 className="text-lg sm:text-xl font-bold">Frequently Asked Questions</h3>
                <div className="mt-4 space-y-3">
                    {faqs.map((f, i) => (
                        <div key={i} className="border rounded-lg overflow-hidden">
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between px-4 py-3 bg-white text-left"
                                aria-expanded={openFaq === i}
                                aria-controls={`faq-${i}`}
                            >
                                <span className="font-medium">{f.q}</span>
                                <span className="text-gray-500">{openFaq === i ? "−" : "+"}</span>
                            </button>
                            <div
                                id={`faq-${i}`}
                                className={`px-4 pb-4 transition-all duration-200 bg-gray-50 ${openFaq === i ? "block" : "hidden"}`}
                            >
                                <p className="text-sm text-gray-700 pt-2">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* small contact CTA */}
            <section data-aos="fade-up" className="mt-8 text-center">
                <p className="text-gray-600">Want to know more or partner with us?</p>
                <a
                    href="/contact"
                    className="inline-block mt-3 bg-black text-white px-5 py-2 rounded-full shadow hover:opacity-95"
                >
                    Contact Us
                </a>
            </section>
        </main>
    );
};

export default About;