import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { ShortUrlPage } from './Components/ShortUrlPage'
import LangingPage from "./Components/LangingPage";
import AboutPage from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RegisterPage from "./Components/RegisterPage";
import { Toaster } from "react-hot-toast";
import Login from "./Components/Login";
import DashboardLayout from "./Components/Dashboard/DashboardLayout";

const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Toaster position="bottom-center" />
            <Routes>
                <Route path="/" element={<LangingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<DashboardLayout />} />
            </Routes>
            <Footer />
        </ >
    )
}

export default AppRouter
export const SubDomainRouter = () => {
    return <Routes>
        <Route path="/:url" element={<ShortUrlPage />} />
    </Routes>
}