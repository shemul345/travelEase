import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

const AddVehicles = () => {
    const { user } = use(AuthContext)
    // console.log(user)

    const handleAddVehicle = (e) => {
        e.preventDefault()

        const formData = {
            vehicleName: e.target.vehicleName.value,
            category: e.target.category.value,
            availability: e.target.availability.value,
            location: e.target.location.value,
            pricePerDay: e.target.pricePerDay.value,
            coverImage: e.target.coverImage.value,
            description: e.target.description.value,
            userEmail: user.email,
            owner: user.displayName,
            createdAt: new Date()
        }
        
        fetch('http://localhost:3000/vehicles', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Added successfully!")
            })
            .catch(error => {
                toast.warning(error);
        })
    }
    
    return (
        <div className="my-5 card border border-gray-200 bg-base-100 w-full max-w-xl mx-auto shadow-2xl rounded-2xl">
            <div className="card-body p-2 relative">
                <h2 className="text-2xl font-bold text-center mb-6">Add New Vehicle</h2>
                <form onSubmit={handleAddVehicle}  className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="label font-medium">Vehicle Name</label>
                        <input
                            type="text"
                            name="vehicleName"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter vehicle name"
                        />
                    </div>

                    {/* Category Dropdown */}
                    <div>
                        <label className="label font-medium">Category</label>
                        <select
                            defaultValue={""}
                            name="category"
                            required
                            className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                        >
                            <option value="" disabled>
                                Select category
                            </option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Electric">Electric</option>
                            <option value="Van">Van</option>
                            <option value="Bike">Bike</option>
                            <option value="Hiace">Hiace</option>
                            <option value="Ambulance">Ambulance</option>
                        </select>
                    </div>

                    {/* Availabilty Dropdown */}
                    <div>
                        <label className="label font-medium">Availability</label>
                        <select
                            defaultValue={""}
                            name="availability"
                            required
                            className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                        >
                            <option value="" disabled>
                                Select availability
                            </option>
                            <option value="Available">Available</option>
                            <option value="Booked">Booked</option>
                        </select>
                    </div>

                    {/* Location Dropdown */}
                    <div>
                        <label className="label font-medium">Location</label>
                        <select
                            defaultValue={""}
                            name="location"
                            required
                            className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                        >
                            <option value="" disabled>
                                Select location
                            </option>
                            <option value="Bagerhat,Bangladesh">Bagerhat,Bangladesh</option>
                            <option value="Bandarban,Bangladesh">Bandarban,Bangladesh</option>
                            <option value="Barguna,Bangladesh">Barguna,Bangladesh</option>
                            <option value="Barisal,Bangladesh">Barisal,Bangladesh</option>
                            <option value="Bhola,Bangladesh">Bhola,Bangladesh</option>
                            <option value="Bogura,Bangladesh">Bogura,Bangladesh</option>
                            <option value="Brahmanbaria,Bangladesh">Brahmanbaria,Bangladesh</option>
                            <option value="Chandpur,Bangladesh">Chandpur,Bangladesh</option>
                            <option value="Chattogram,Bangladesh">Chattogram,Bangladesh</option>
                            <option value="Chuadanga,Bangladesh">Chuadanga,Bangladesh</option>
                            <option value="Comilla,Bangladesh">Comilla,Bangladesh</option>
                            <option value="Cox's Bazar,Bangladesh">Cox's Bazar,Bangladesh</option>
                            <option value="Dhaka,Bangladesh">Dhaka,Bangladesh</option>
                            <option value="Dinajpur,Bangladesh">Dinajpur,Bangladesh</option>
                            <option value="Faridpur,Bangladesh">Faridpur,Bangladesh</option>
                            <option value="Feni,Bangladesh">Feni,Bangladesh</option>
                            <option value="Gaibandha,Bangladesh">Gaibandha,Bangladesh</option>
                            <option value="Gazipur,Bangladesh">Gazipur,Bangladesh</option>
                            <option value="Gopalganj,Bangladesh">Gopalganj,Bangladesh</option>
                            <option value="Habiganj,Bangladesh">Habiganj,Bangladesh</option>
                            <option value="Jamalpur,Bangladesh">Jamalpur,Bangladesh</option>
                            <option value="Jashore,Bangladesh">Jashore,Bangladesh</option>
                            <option value="Jhalokathi,Bangladesh">Jhalokathi,Bangladesh</option>
                            <option value="Jhenaidah,Bangladesh">Jhenaidah,Bangladesh</option>
                            <option value="Joypurhat,Bangladesh">Joypurhat,Bangladesh</option>
                            <option value="Khagrachhari,Bangladesh">Khagrachhari,Bangladesh</option>
                            <option value="Khulna,Bangladesh">Khulna,Bangladesh</option>
                            <option value="Kishoreganj,Bangladesh">Kishoreganj,Bangladesh</option>
                            <option value="Kurigram,Bangladesh">Kurigram,Bangladesh</option>
                            <option value="Kushtia,Bangladesh">Kushtia,Bangladesh</option>
                            <option value="Lakshmipur,Bangladesh">Lakshmipur,Bangladesh</option>
                            <option value="Lalmonirhat,Bangladesh">Lalmonirhat,Bangladesh</option>
                            <option value="Madaripur,Bangladesh">Madaripur,Bangladesh</option>
                            <option value="Magura,Bangladesh">Magura,Bangladesh</option>
                            <option value="Manikganj,Bangladesh">Manikganj,Bangladesh</option>
                            <option value="Meherpur,Bangladesh">Meherpur,Bangladesh</option>
                            <option value="Moulvibazar,Bangladesh">Moulvibazar,Bangladesh</option>
                            <option value="Munshiganj,Bangladesh">Munshiganj,Bangladesh</option>
                            <option value="Mymensingh,Bangladesh">Mymensingh,Bangladesh</option>
                            <option value="Naogaon,Bangladesh">Naogaon,Bangladesh</option>
                            <option value="Narail,Bangladesh">Narail,Bangladesh</option>
                            <option value="Narayanganj,Bangladesh">Narayanganj,Bangladesh</option>
                            <option value="Narsingdi,Bangladesh">Narsingdi,Bangladesh</option>
                            <option value="Natore,Bangladesh">Natore,Bangladesh</option>
                            <option value="Nawabganj,Bangladesh">Nawabganj,Bangladesh</option>
                            <option value="Netrakona,Bangladesh">Netrakona,Bangladesh</option>
                            <option value="Nilphamari,Bangladesh">Nilphamari,Bangladesh</option>
                            <option value="Noakhali,Bangladesh">Noakhali,Bangladesh</option>
                            <option value="Pabna,Bangladesh">Pabna,Bangladesh</option>
                            <option value="Panchagarh,Bangladesh">Panchagarh,Bangladesh</option>
                            <option value="Patuakhali,Bangladesh">Patuakhali,Bangladesh</option>
                            <option value="Pirojpur,Bangladesh">Pirojpur,Bangladesh</option>
                            <option value="Rajbari,Bangladesh">Rajbari,Bangladesh</option>
                            <option value="Rajshahi,Bangladesh">Rajshahi,Bangladesh</option>
                            <option value="Rangamati,Bangladesh">Rangamati,Bangladesh</option>
                            <option value="Rangpur,Bangladesh">Rangpur,Bangladesh</option>
                            <option value="Satkhira,Bangladesh">Satkhira,Bangladesh</option>
                            <option value="Shariatpur,Bangladesh">Shariatpur,Bangladesh</option>
                            <option value="Sherpur,Bangladesh">Sherpur,Bangladesh</option>
                            <option value="Sirajganj,Bangladesh">Sirajganj,Bangladesh</option>
                            <option value="Sunamganj,Bangladesh">Sunamganj,Bangladesh</option>
                            <option value="Sylhet,Bangladesh">Sylhet,Bangladesh</option>
                            <option value="Tangail,Bangladesh">Tangail,Bangladesh</option>
                            <option value="Thakurgaon,Bangladesh">Thakurgaon,Bangladesh</option>

                        </select>
                    </div>

                    {/* Price Field */}
                    <div>
                        <label className="label font-medium">Price Per Day</label>
                        <input
                            type="number"
                            name="pricePerDay"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Enter vehicle name"
                        />
                    </div>

                    {/* Vehicle Image URL */}
                    <div>
                        <label className="label font-medium">Vehicle Image URL</label>
                        <input
                            type="url"
                            name="coverImage"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    {/* Description Textarea */}
                    <div>
                        <label className="label font-medium">Description</label>
                        <textarea
                            name="description"
                            required
                            rows="3"
                            className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                            placeholder="Enter description"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn-primary w-full"
                    >
                        <span className='text'>Add Vehicle</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddVehicles;