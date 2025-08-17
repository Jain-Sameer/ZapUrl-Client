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
import PrivateRoute from './PrivateRoute';
import ErrorPage from './Components/ErrorPage';

const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Toaster position="bottom-center" />
            <Routes>
                <Route path="/" element={<LangingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/register" element={<PrivateRoute PublicPage={true}>
                    <RegisterPage />
                </PrivateRoute>
                } />
                <Route path="/login" element={
                    <PrivateRoute PublicPage={true}>
                        <Login />
                    </PrivateRoute>
                } />
                <Route path="/dashboard" element={
                    <PrivateRoute PublicPage={false}>
                        <DashboardLayout />
                    </PrivateRoute>
                } />

                <Route path='/error' element={
                    <ErrorPage message="An error has occured!" />
                } />
                <Route path='*' element={
                    <ErrorPage message="We can't seem to find the page you're looking for!" />
                } />
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