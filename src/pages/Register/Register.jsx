import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import "aos/dist/aos.css";
import Aos from 'aos';
import { AuthContext } from '../../contexts/AuthContext';
import Loader from '../../components/Loader/Loader';

const Register = () => {
    const {
        register,
        loading,
        setUser,
        signInWithGoogle,
        signInWithGithub,
        updateUser } = useContext(AuthContext);
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const [passwordErro, setPasswordError] = useState("");

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

    const handleSignUp = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const photoURL = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const validPasswordUppercase = /[A-Z]/;
        const validPasswordLowercase = /[a-z]/;
        const specialCharacter = /[@#$%^&*]/;

        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.")
            return;
        } else if (!validPasswordUppercase.test(password)) {
            setPasswordError("Must have an Uppercase letter in the password!")
            return;
        } else if (!validPasswordLowercase.test(password)) {
            setPasswordError("Must have an lowercase letter in the password!")
            return;
        } else if (!specialCharacter.test(password)) {
            setPasswordError("Must have an special character in the password!")
            return;
        }

        register(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName, photoURL })
                    .then(() => {
                        setUser({ ...user, displayName, photoURL })
                        toast.success('Account registered successfully!');
                        navigate("/")
                    })
                    .catch((e) => {
                        toast.error(`${e.message}`)
                    })
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

    return (
        <div className="py-12 bg-gradient-to-r  from-black to-red-800">
            <div className={"max-w-11/12 mx-auto flex flex-col lg:flex-row lg:gap-10 items-center justify-center"}>
                <div data-aos="fade-down" className="mt-10 lg:w-1/2 w-full p-10 flex flex-col items-start justify-center text-white">
                    <h1 className="text-5xl font-bold
                 mb-6 text-white">
                        Register now!
                    </h1>
                    <p className="text-lg text-white/90">
                        Create your account and start your journey today! Rent or list your vehicles with full convenience and trust.
                    </p>
                </div>

                <div data-aos="fade-up" className="lg:w-1/2 w-full h-full bg-white rounded-none
             lg:rounded-xl p-8 m-0 lg:m-5 shadow-2xl flex items-center justify-center">
                    <form onSubmit={handleSignUp} className="flex flex-col gap-4 w-full max-w-md">
                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            className="input input-bordered rounded-3xl w-full text-gray-500"
                            placeholder="Enter Your Name"
                        />
                        {/* PhotoURL */}
                        <input
                            type="text"
                            name="photoUrl"
                            className="input input-bordered rounded-3xl w-full text-gray-500"
                            placeholder="Photo URL"
                        />
                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            className="input input-bordered rounded-3xl w-full text-gray-500"
                            placeholder="Email"
                        />
                        {/* Password */}
                        <div className='relative'>
                            <input
                                type={show ? "text" : "password"}
                                name="password"
                                className="input input-bordered rounded-3xl w-full text-gray-500"
                                placeholder="Password"
                            />
                            <span
                                onClick={() => setShow(!show)}
                                className="absolute right-4 top-3 cursor-pointer z-50 text-gray-500"
                            >
                                {show ? <IoEyeOff /> : <FaEye />}
                            </span>
                        </div>
                        {passwordErro && <p className='text-sm text-red-500 font-semibold'>{passwordErro}</p>}
                        <button className="btn-primary w-full">
                            <span className='text'>Register</span>
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
                        <p className='text-sm text-center'>Already have an account?
                            <Link to="/login" className="text-blue-600 link-hover underline font-semibold"> Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

