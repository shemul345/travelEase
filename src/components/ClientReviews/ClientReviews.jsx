import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
    {
        name: "Alex Johnson",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        message:
            "TravelEase made my trip smooth and stress-free. The booking process was super easy and the car was in perfect condition!",
    },
    {
        name: "Sophia Martinez",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        message:
            "Amazing customer service! They responded quickly and helped me choose the perfect car for my weekend trip.",
    },
    {
        name: "Liam Carter",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
        message:
            "I loved how secure and transparent the payment process was. Highly recommend TravelEase!",
    },
    {
        name: "Emily Davis",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        message:
            "The support team was super responsive. The whole rental experience was smooth and professional.",
    },
    {
        name: "Noah Wilson",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        message:
            "Best vehicle rental experience I’ve ever had. Everything was on time and well-maintained!",
    },
    {
        name: "Olivia Brown",
        image: "https://randomuser.me/api/portraits/women/29.jpg",
        message:
            "I’ll definitely rent from TravelEase again. Easy booking, friendly service, and quality vehicles!",
    },
];

const ClientReviews = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1536,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 1280,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640, 
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 480, 
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-red-500 font-semibold uppercase">What Our Clients Say</p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                    Client <span className="text-red-500">Testimonials</span>
                </h2>

                <Slider {...settings}>
                    {clients.map((client, index) => (
                        <div key={index} className="px-2 sm:px-4">
                            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-red-500"
                                />
                                <h3 className="text-lg font-semibold">{client.name}</h3>
                                <p className="text-gray-300 text-sm mt-3">“{client.message}”</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ClientReviews;
