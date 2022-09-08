import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { logout } from "../../modules/user";

const HeaderContainer = () => {
    const {user} = useSelector(({ user }) => ({user: user.user}));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    }
    return (
        <>
      <Navbar user={user} onLogout={onLogout}/>
      </>
    )
};

export default HeaderContainer;