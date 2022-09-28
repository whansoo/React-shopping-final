import React from "react";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import LoginForm from "../containers/auth/LoginForm";

const LoginPage = () => {
    return (
            <>
            <Navbar/>
            <Login/>
            <LoginForm/>
            <Footer/>
            </>
    )
};

export default LoginPage;