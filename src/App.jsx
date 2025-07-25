import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LangingPage from "./Components/LangingPage";
import AboutPage from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RegisterPage from "./Components/RegisterPage";
import { Toaster } from "react-hot-toast";
import Login from "./Components/Login";
import DashboardLayout from "./Components/Dashboard/DashboardLayout";
function App() {

  return (
    <>
      <Router>
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
      </Router >

    </>
  );
}

export default App
