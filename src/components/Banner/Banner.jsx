import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const videos = [
    "https://www.shutterstock.com/shutterstock/videos/3785694187/preview/stock-footage-sleek-red-sports-car-racing-at-high-speed-on-neon-highway-power-acceleration-on-a-night-track-with.webm",
    "https://cdn.pixabay.com/video/2021/09/13/88481-606110665_large.mp4",
    "https://cdn.pixabay.com/video/2022/10/20/135728-764361710_large.mp4",
];

const Banner = () => {
    const [current, setCurrent] = useState(0);

    // Auto-play the carousel every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % videos.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () =>
        setCurrent((current - 1 + videos.length) % videos.length);
    const nextSlide = () => setCurrent((current + 1) % videos.length);

    return (
        <>
            <div className="w-full flex justify-center">
                <div className="">
                    <div className="w-full overflow-hidden bg-black shadow-2xl">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {videos.map((src, i) => (
                                <div key={i} className="w-full shrink-0 relative">
                                    <video
                                        src={src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-[100vh] object-cover brightness-90"
                                    />
                                    <div className="inset-0 bg-linear-to-t from-black/40 to-transparent" />
                                    {/* ✅ “All Vehicles” Button */}
                                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                                        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                                            Explore Your Next Ride
                                        </h1>
                                        <Link
                                            to="/allVehicles"
                                            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition transform hover:scale-105 shadow-lg"
                                        >
                                            All Vehicles
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Dots indicator */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {videos.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`h-2 w-2 rounded-full transition-all ${current === i ? "bg-white w-4" : "bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </>
    );
};

export default Banner;
