import React from "react";
import { FaLink, FaShareAlt, FaShieldAlt, FaRocket } from "react-icons/fa";

const AboutPage = () => {
    return (
        <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2">
            <div className="bg-white w-full sm:py-10 py-8">
                <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic mb-3">
                    About ZapURL
                </h1>
                <p className="text-gray-700 text-sm mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
                    ZapURL is your go-to solution for fast, secure, and intelligent link
                    shortening. Whether you're sharing content or tracking engagement,
                    ZapURL makes link management effortless and efficient.
                </p>

                <div className="space-y-5 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
                    <div className="flex items-start">
                        <FaLink className="text-blue-500 text-3xl mr-4" />
                        <div>
                            <h2 className="sm:text-2xl font-bold text-slate-800">
                                Instant Link Shortening
                            </h2>
                            <p className="text-gray-600">
                                Create clean, short links in seconds. ZapURL’s minimal interface
                                makes shortening URLs lightning fast and frictionless.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <FaShareAlt className="text-green-500 text-3xl mr-4" />
                        <div>
                            <h2 className="sm:text-2xl font-bold text-slate-800">
                                Smart Sharing & Analytics
                            </h2>
                            <p className="text-gray-600">
                                Track your links with real-time analytics. View click counts,
                                traffic sources, and location data to understand your audience
                                and optimize reach.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <FaShieldAlt className="text-purple-500 text-3xl mr-4" />
                        <div>
                            <h2 className="sm:text-2xl font-bold text-slate-800">
                                Built-In Security
                            </h2>
                            <p className="text-gray-600">
                                Your data and links are protected with top-tier encryption and
                                safety features. ZapURL prevents malicious redirects and ensures
                                safe browsing for everyone.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <FaRocket className="text-red-500 text-3xl mr-4" />
                        <div>
                            <h2 className="sm:text-2xl font-bold text-slate-800">
                                Blazing Fast & Reliable
                            </h2>
                            <p className="text-gray-600">
                                Experience near-instant redirects and 99.99% uptime. ZapURL’s
                                performance-driven backend ensures your links work anytime,
                                anywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
