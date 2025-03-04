import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase.init';  // Correct import here
import BannerImage from '../assets/Banner.jpg';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex h-screen bg-[#1c1b29] p-5 text-white ">
      {/* Left Side - Image & Description */}
      <div className="w-1/2 rounded-md bg-cover bg-center relative" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-10">
          <h1 className="text-4xl font-extrabold">AMU</h1>
          <p className="text-lg">Capturing Moments, Creating Memories</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 flex rounded-full flex-col justify-center items-center px-16">
        <h2 className="text-3xl font-bold">Create an account</h2>
        <p className="text-gray-400 mt-2">Already have an account? <Link to="/login" className="text-purple-400">Log in</Link></p>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        
        <form className="w-full mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold">Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-lg mt-1 focus:ring-2 focus:ring-purple-500" placeholder="Your Name" required />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-lg mt-1 focus:ring-2 focus:ring-purple-500" placeholder="name@email.com" required />
          </div>

          <div className="mt-4 relative">
            <label className="block text-sm font-semibold">Password</label>
            <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-lg mt-1 focus:ring-2 focus:ring-purple-500" placeholder="At least 6 characters" required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-9 text-gray-400">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex items-start mt-4">
            <input type="checkbox" className="mr-2 mt-1" required />
            <span className="text-gray-400 text-sm">I agree to the <a href="#" className="text-purple-400">Terms & Conditions</a></span>
          </div>

          <button className="w-full bg-purple-600 text-white py-2 rounded-lg mt-6 text-lg font-semibold hover:bg-purple-700 transition-all">Create Account</button>
        </form>

        <div className="flex items-center gap-4 mt-6">
          <button onClick={handleGoogleSignIn} className="flex items-center justify-center w-full py-2 px-5 border border-gray-700 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-all">
            <FaGoogle className="mr-2" /> Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
