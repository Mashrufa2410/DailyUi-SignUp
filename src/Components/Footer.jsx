import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Using React Icons
import logo from "../assets/Logo.png"; // Import your logo image

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-12">
                    <img src={logo} alt="Company Logo" className="w-24 h-24 object-contain mb-3" />
                    <p className="text-3xl font-semibold">Career Counseling</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="/about" className="hover:text-gray-300 transition-colors">About Us</a></li>
                            <li><a href="/careers" className="hover:text-gray-300 transition-colors">Careers</a></li>
                            <li><a href="/terms" className="hover:text-gray-300 transition-colors">Terms & Conditions</a></li>
                            <li><a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="/consulting" className="hover:text-gray-300 transition-colors">Consulting</a></li>
                            <li><a href="/coaching" className="hover:text-gray-300 transition-colors">Coaching</a></li>
                            <li><a href="/workshops" className="hover:text-gray-300 transition-colors">Workshops</a></li>
                            <li><a href="/resources" className="hover:text-gray-300 transition-colors">Resources</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="/contact" className="hover:text-gray-300 transition-colors">Contact Us</a></li>
                            <li><a href="/help" className="hover:text-gray-300 transition-colors">Help Center</a></li>
                            <li><a href="/faq" className="hover:text-gray-300 transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-400">
                        © 2024 Career Counseling. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
