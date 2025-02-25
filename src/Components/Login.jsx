import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase.init';
import { FaGoogle } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { BiLeftArrow } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        setErrorMessage('');

        if (!email || !password) {
            setErrorMessage('Email and password are required.');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => navigate('/'))
            .catch((error) => setErrorMessage(error.message));
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(() => navigate('/'))
            .catch((error) => setErrorMessage(error.message));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#040506]">
            <div className="bg-[#0d0d0d] text-white rounded-xl my-10 p-8 w-full max-w-md shadow-xl min-h-[90vh] flex flex-col justify-between">
                <Link to={"/"} className="text-white text-lg mb-6">
                    <BiLeftArrow className="w-8 h-8" />
                </Link>
                <div className="flex flex-col flex-grow">
                    <h2 className="text-4xl font-semibold text-center">Login</h2>
                    <p className="text-gray-400 text-center mt-2 mb-6">Login with one of the following options.</p>

                    {/* Social Buttons */}
                    <div className="flex justify-center">
                        <button onClick={handleGoogleLogin} className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg w-36 h-16 flex items-center justify-center">
                            <FaGoogle className="text-2xl" />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="mt-8">
                        {/* Email Input */}
                        <div className="mt-6">
                            <input type="email" name="email" placeholder="tim@apple.com"
                                className="w-full py-4 px-4 bg-[#141414] border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                                value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        {/* Password Input */}
                        <div className="mt-6 relative">
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter your password"
                                className="w-full py-4 px-4 bg-[#141414] border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                                value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <button type="button" onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-5 text-gray-400 text-lg">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button className="mt-8 w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg text-lg font-semibold">
                            Login
                        </button>
                    </form>

                    {/* Error Message */}
                    {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}

                    {/* Sign Up Link */}
                    <p className="text-gray-400 text-center mt-6">
                        Don't have an account? <Link to="/signup" className="text-purple-500">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
