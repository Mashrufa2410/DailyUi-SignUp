import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import OfficeImage from '../assets/Office.webp';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Left Side - Image & Description */}
            <div className="w-1/2 bg-cover bg-center relative" style={{ backgroundImage: `url(${OfficeImage})` }}>
                <div className="absolute flex flex-col justify-between py-10 inset-0 bg-[#3d8775] bg-opacity-55 px-16 text-white h-full">
                    <div>
                        <h1 className="text-4xl font-extrabold">Confer<span className="text-[#f3f3f3]">Edge</span>:</h1>
                    </div>

                    <div>
                        <p className=" mt-6 font-semibold">Seamlessly Schedule, Book, and Manage Meetings with ConferEdge</p>
                        <p className="text-gray-300 mt-4  leading-relaxed">"ConferEdge is your ultimate meeting room companion, offering a user-friendly platform to effortlessly schedule, book, and manage all your important meetings and conferences, ensuring your workspace experience is always efficient and hassle-free."</p>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-1/2 flex flex-col justify-center items-center px-24">
                <h2 className="text-4xl font-bold">Sign Up.</h2>
                <p className="text-gray-500 text-center mt-2 text-lg">Unlock a World of Seamless Meetings<br />Sign Up with ConferEdge Today!</p>

                <form className="w-full mt-8">
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold">Your Name</label>
                        <input type="text" className="w-full px-2 py-1 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-[#3d8775]" placeholder="Your Name" required />
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-semibold">Your e-mail</label>
                        <input type="email" className="w-full px-2 py-1 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-[#3d8775]" placeholder="name@email.com" required />
                    </div>

                    <div className="mt-4 relative">
                        <label className="block text-gray-700 text-sm font-semibold">Password</label>
                        <input type={showPassword ? 'text' : 'password'} className="w-full px-2 py-1 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-[#3d8775]" placeholder="at least 6 characters" required />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-8 text-gray-500">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div className="flex items-start mt-4">
                        <input type="checkbox" className="mr-2 mt-1" required />
                        <span className="text-gray-600 text-sm">By clicking here, I state that I have read and understood the <a href="#" className="text-[#3d8775] underline">terms and conditions</a>.</span>
                    </div>

                    <button className="w-full bg-[#3d8775] text-white py-2 rounded-lg mt-6 text-lg font-semibold hover:bg-[#085c3c] transition-all">Create Account</button>
                </form>

                <p className="text-gray-600 mt-6 text-sm">Already have an account? <Link to="/login" className="text-[#3d8775] font-semibold">Log In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
