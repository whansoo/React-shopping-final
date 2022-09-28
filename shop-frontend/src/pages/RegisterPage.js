import React from "react";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import RegisterForm from "../containers/auth/RegisterForm";

const RegisterPage = () => {
    return (
        <>
            <Navbar/>
            <Login/>
            <RegisterForm />
            <Footer/>
        </>
    )
}

export default RegisterPage;