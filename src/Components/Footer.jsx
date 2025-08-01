import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-custom-gradient text-white py-8 z-40 relative">
            <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-2">ZapUrl</h2>
                    <p>Simplifying URL shortening for efficient sharing</p>
                </div>

                <p className="mt-4 lg:mt-0">
                    &copy; 2025 ZapUrl. All rights reserved.
                </p>

                <div className="flex space-x-6 mt-4 lg:mt-0">
                    <a href="#" className="hover:text-gray-200">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://x.com/sameerj2003" className="hover:text-gray-200" target="blank">
                        <FaTwitter size={24} />
                    </a>
                    <a href="#" className="hover:text-gray-200">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://linkedin.com/in/sameer-jain2003" className="hover:text-gray-200" target="blank">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;