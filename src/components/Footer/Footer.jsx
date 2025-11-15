import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { format } from "date-fns";



export default function Footer() {

    const year = format(new Date(), 'yyyy');
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, []);
    return (
        <footer data-aos="fade-down"
            className="bg-gradient-to-r from-black
             via-orange-950 to-black text-white">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="space-y-4">
                        <h3 className="text-2xl font-extrabold"><Link to="/">TravelEase</Link></h3>
                        <p className="text-sm opacity-90">
                            TravelEase is a modern and reliable vehicle rental platform
                            that connects travelers with trusted vehicle owners.
                            We provide safe, affordable, and flexible transportation
                            options designed for comfort and convenience.
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="text-xs opacity-90">Contact:</span>
                            <a href="tel:+880123456789" className="text-sm hover:underline">+880 1234 56789</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-xs opacity-90">Email:</span>
                            <a href="mailto:info@toytopia.example" className="text-sm hover:underline">info@toytopia.example</a>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold mb-3">Company</h4>
                            <ul className="space-y-2 text-sm opacity-95">
                                <li><a href="/about" className="hover:underline">About Us</a></li>
                                <li><a href="#" className="hover:underline">Get on Trip</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                                <li><a href="#" className="hover:underline">Blog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-3">Legal</h4>
                            <ul className="space-y-2 text-sm opacity-95">
                                <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
                                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                                <li><a href="/refund" className="hover:underline">Refund Policy</a></li>
                                <li><a href="/safety" className="hover:underline">Safety & Guidelines</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="space-y-4">
                        <h4 className="font-bold">Follow us</h4>
                        <p className="text-sm opacity-95">
                            Get updates, promotions and get trips on social media.</p>

                        <div className="flex gap-3">
                            {/* Facebook */}
                            <a href="#" aria-label="TravelEase on Facebook"
                                className="btn btn-ghost btn-circle bg-white/10 hover:bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07C2 17.09 5.66 21.13 10.44 21.9v-6.99H7.9v-2.84h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.84h-2.3V21.9C18.34 21.13 22 17.09 22 12.07z" />
                                </svg>
                            </a>

                            {/* Twitter */}
                            <a href="#" aria-label="TravelEase on Twitter"
                                className="btn btn-ghost btn-circle bg-white/10 hover:bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 5.92c-.6.27-1.24.44-1.92.52.69-.42 1.21-1.08 1.46-1.87-.65.39-1.37.66-2.14.81C18.18 4.7 17.35 4 16.29 4c-1.58 0-2.86 1.28-2.86 2.86 0 .22.03.43.07.63C10.3 7.41 7.07 6.03 4.9 3.6c-.24.42-.38.92-.38 1.45 0 .99.5 1.86 1.26 2.37-.47-.01-.91-.14-1.3-.35v.03c0 1.39.99 2.55 2.3 2.82-.24.07-.49.11-.75.11-.18 0-.36-.02-.53-.05.36 1.12 1.41 1.94 2.66 1.97C6.3 15.4 5 15.86 3.6 15.86c-.24 0-.47-.01-.7-.04C4.86 17 6.75 17.7 8.83 17.7c7.61 0 11.78-6.31 11.78-11.78 0-.18-.01-.36-.02-.54.81-.6 1.5-1.35 2.05-2.2z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a href="#" aria-label="TravelEase on Instagram"
                                className="btn btn-ghost btn-circle bg-white/10 hover:bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.25A4.75 4.75 0 1016.75 13 4.75 4.75 0 0012 8.25zm6.5-3.5a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0118.5 4.75z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a href="#" aria-label="TravelEase on LinkedIn"
                                className="btn btn-ghost btn-circle bg-white/10 hover:bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.45 20.45h-3.55v-5.33c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8v5.43H9.56V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.69zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 01-.01 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
                                </svg>
                            </a>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-semibold">Subscribe to our newsletter</label>
                            <div className="mt-2 flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    aria-label="Email for newsletter"
                                    className="input input-bordered w-full max-w-xs bg-white/10 placeholder-white/70 text-white"
                                />
                                <button className="btn ml-3">Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm opacity-90">© {year} TravelEase. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="/terms" className="text-sm hover:underline">Terms</a>
                        <a href="/privacy" className="text-sm hover:underline">Privacy</a>
                        <a href="/contact" className="text-sm hover:underline">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
