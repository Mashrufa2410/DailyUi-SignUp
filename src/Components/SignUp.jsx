import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';
import { Link } from 'react-router-dom';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { BiLeftArrow } from 'react-icons/bi';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Initialize navigate function

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

        setErrorMessage('');

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                sendEmailVerification(auth.currentUser);
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        console.log("Profile updated successfully");
                        navigate('/'); // ✅ Redirect to Home Page
                    });
            })
            .catch((error) => setErrorMessage(error.message));
    };

    return (
        <div className="flex items-center  justify-center min-h-screen bg-[#040506]">
            <div className="bg-[#0d0d0d] my-10 text-white rounded-xl p-8 w-full max-w-md shadow-xl min-h-[90vh] flex flex-col justify-between">
                <Link to={"/"} className="text-white text-lg mb-6">
                                    <BiLeftArrow className="w-8 h-8" />
                                </Link>

                <div className="flex flex-col flex-grow">
                    <h2 className="text-4xl font-semibold text-center">Sign up</h2>
                    <p className="text-gray-400 text-center mt-2 mb-6">
                        Sign up with one of the following options.
                    </p>

                    {/* Social Buttons */}
                    <div className="flex justify-center">
                        <button className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg w-36 h-16 flex items-center justify-center">
                            <FaGoogle className="text-white text-2xl" />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSignUp} className="mt-8">
                        {/* Name Input */}
                        <div className="relative">
                            <input type="text" name="name" placeholder="Name"
                                className="w-full py-4 px-4 bg-[#141414] border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                                required />
                        </div>

                        {/* Email Input */}
                        <div className="mt-6">
                            <input type="email" name="email" placeholder="tim@apple.com"
                                className="w-full py-4 px-4 bg-[#141414] border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                                required />
                        </div>

                        {/* Password Input */}
                        <div className="mt-6 relative">
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Pick a strong password"
                                className="w-full py-4 px-4 bg-[#141414] border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                                required />
                            <button type="button" onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-5 text-gray-400 text-lg">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button className="mt-8 w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg text-lg font-semibold">
                            Create Account
                        </button>
                    </form>

                    {/* Error Message */}
                    {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}

                    {/* Login Link */}
                    <p className="text-gray-400 text-center mt-6">
                        Already have an account? <Link to="/login" className="text-purple-500">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
