// ClientReviews.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Optional simple custom arrows */
const Arrow = ({ className, style, onClick, label }) => (
    <button
        className={className}
        style={{
            ...style,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            width: 40,
            height: 40,
            borderRadius: "9999px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
        }}
        onClick={onClick}
        aria-label={label}
    />
);

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
        dots: true,
        infinite: true,
        speed: 800, // animation speed (ms)
        autoplay: true,
        autoplaySpeed: 3000, // time between slides (ms)
        cssEase: "ease",
        slidesToShow: 3, // default for large screens
        slidesToScroll: 1,
        arrows: true,
        accessibility: true,
        swipeToSlide: true,
        touchMove: true,
        pauseOnHover: true,
        adaptiveHeight: true,
        centerMode: false,
        nextArrow: <Arrow label="Next testimonial" />,
        prevArrow: <Arrow label="Previous testimonial" />,
        responsive: [
            {
                breakpoint: 1536, // 2xl
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1280, // xl
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024, // lg / tablet landscape
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768, // md / tablet portrait
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // sm / mobile
                settings: {
                    slidesToShow: 1,
                    arrows: false, // hide arrows on very small screens
                    dots: true,
                },
            },
        ],
    };

    return (
        <section className="bg-gray-900 text-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-red-500 font-semibold uppercase text-sm sm:text-base">
                    What Our Clients Say
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10">
                    Client <span className="text-red-500">Testimonials</span>
                </h2>

                <div aria-label="Client testimonials carousel" role="region">
                    <Slider {...settings}>
                        {clients.map((client, index) => (
                            <div key={index} className="px-3 sm:px-4">
                                <article
                                    className="bg-gray-800 rounded-2xl shadow-lg p-5 sm:p-6 hover:scale-105 transform transition duration-300 h-full flex flex-col items-center text-center"
                                    aria-label={`Testimonial by ${client.name}`}
                                >
                                    <img
                                        src={client.image}
                                        alt={client.name}
                                        loading="lazy"
                                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 object-cover border-4 border-red-500"
                                    />
                                    <h3 className="text-md sm:text-lg font-semibold">{client.name}</h3>
                                    <p className="text-gray-300 text-sm sm:text-base mt-3 line-clamp-6">
                                        “{client.message}”
                                    </p>
                                </article>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;
