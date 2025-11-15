import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Loader from '../../components/Loader/Loader';
import { IoSaveOutline } from 'react-icons/io5';

const Profile = () => {
    const { user, updateUserProfile, updatePassword, loading, setLoading } = useContext(AuthContext);
    const [successMessage, setSuccessMessage] = useState('');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const name = form.name.value;
        const password = form.password.value;
        const photo = form.photoURL.value;

        try {
            await updateUserProfile(name, photo);
            if (password) await updatePassword(password);
            setPhotoURL(photo);
            setSuccessMessage("Profile updated successfully!");
        } catch (error) {
            console.error(error);
            setSuccessMessage("Failed to update profile.");
        }
        setLoading(false);
    };

    if (loading) return <Loader />;

    return (
        <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-2xl">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
                <img
                    src={photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-red-500 object-cover shadow-lg"
                />
            </div>

            <h1 className="text-3xl font-bold text-center text-red-500 mb-6">{user.displayName}</h1>

            {successMessage && (
                <div className="text-center mb-4 text-green-500 font-semibold">{successMessage}</div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={user?.displayName}
                        placeholder="Enter your name"
                        className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        required
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        disabled
                        className="border border-gray-300 rounded-xl px-4 py-2 bg-gray-100 cursor-not-allowed"
                    />
                </div>

                {/* Photo URL */}
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">Profile Photo URL</label>
                    <input
                        type="text"
                        name="photoURL"
                        defaultValue={user?.photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        placeholder="Enter photo URL"
                        className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700">New Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter new password"
                        className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                {/* Save Button */}
                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 mt-4"
                >
                    <IoSaveOutline className="w-5 h-5" />
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Profile;
