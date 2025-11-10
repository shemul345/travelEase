import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { IoEyeOff } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';
import "aos/dist/aos.css";
import Aos from 'aos';
import { AuthContext } from '../../contexts/AuthContext';
import Loader from '../../components/Loader/Loader';

const Login = () => {
    const { login,
        signInWithGoogle,
        signInWithGithub,
        loading,
        resetPassword } = useContext(AuthContext);
    const [show, setShow] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef(null);

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

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
            .then(() => {
                toast.success('Account login successfully!');
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                toast.error(`${error.message}`)
            })
    }

    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Account login successfully!');
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                toast.error(`${error.message}`)
            })
    }

    const handleGithubSignin = () => {
        signInWithGithub()
            .then(() => {
                toast.success('Account login successfully!');
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                toast.error(`${error.message}`)
            })
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value;

        resetPassword(email)
            .then(() => {
                toast.success("Check your email to reset password")
            })
            .catch((e) => {
                toast.error(e.message);
            })
    }

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center
                        bg-gradient-to-r from-black to-red-800 py-12">
            <div className={"max-w-11/12 mx-auto flex flex-col lg:flex-row lg:gap-10 items-center justify-center w-full"}>
                <div data-aos="fade-down" className="mt-10 lg:w-1/2 w-full p-10 flex flex-col items-start justify-center text-white">
                    <h1 className="text-5xl font-bold mb-6 text-white">
                        Login now!
                    </h1>
                    <p className="text-lg text-white/90">
                        Welcome to TravelEase! Easily rent cars, bikes, or vans and enjoy a hassle-free travel experience.
                    </p>
                </div>

                <div data-aos="fade-up" className="lg:w-1/2 w-full h-full bg-white rounded-xl lg:rounded-xl p-8 m-0 lg:m-5 shadow-2xl flex items-center justify-center">
                    <form onSubmit={handleSignIn} className="flex flex-col gap-4 w-full max-w-md">
                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            ref={emailRef}
                            className="input input-bordered w-full text-gray-500 rounded-3xl py-6"
                            placeholder="Email"
                        />
                        {/* Password */}
                        <div className='relative'>
                            <input
                                type={show ? "text" : "password"}
                                name="password"
                                className="input input-bordered w-full text-gray-500 rounded-3xl py-6"
                                placeholder="Password"
                            />
                            <span
                                onClick={() => setShow(!show)}
                                className="absolute right-6 top-4 cursor-pointer z-50 text-gray-500 text-lg">
                                {show ? <IoEyeOff /> : <FaEye />}
                            </span>
                        </div>
                        <div className="text-right">
                            <a onClick={handleResetPassword} className="link link-hover text-sm text-primary">Forgot password?</a>
                        </div>
                        <button className="btn-primary w-full">
                            <span className='text'>Login</span>
                        </button>

                        {/* Divider */}
                        <div className="flex items-center justify-center gap-2 my-2">
                            <div className="h-px w-32 bg-gray-400"></div>
                            <span className="text-sm text-black">or</span>
                            <div className="h-px w-32 bg-gray-400"></div>
                        </div>

                        {/* Google Signin */}
                        <button
                            type="button"
                            onClick={handleGoogleSignin}
                            className="flex items-center justify-center gap-3
                             bg-gradient-to-r from-black
                              to-red-600 text-white px-5 py-2 rounded-3xl
                               w-full font-semibold shadow-md
                                hover:from-red-600 hover:to-black
                                 transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="google"
                                className="w-7 h-8"
                            />
                            Continue with Google
                        </button>

                        {/* Github Signin */}
                        <button
                            type="button"
                            onClick={handleGithubSignin}
                            className="flex items-center justify-center gap-3
                             bg-gradient-to-r from-red-600
                              to-black text-white px-5 py-2 rounded-3xl
                               w-full font-semibold shadow-md
                                hover:from-black hover:to-red-600
                                 transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src="https://img.icons8.com/fluency/48/github.png"
                                alt="google"
                                className="w-7 h-8"
                            />
                            Continue with Github
                        </button>

                        <p className='text-sm text-center mt-2'>
                            Don't have an account?
                            <Link to="/register" className="text-blue-600
                             link-hover underline font-semibold ml-1">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
