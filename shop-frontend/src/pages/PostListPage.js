import React from "react";
import Navbar from "../components/Navbar";
import PostListContainer from "../containers/posts/PostListContainer";
import PaginationContainer from "../containers/posts/PaginationContainer";
import Review from "../components/Review";
import Footer from "../components/Footer";

const PostListPage = () => {
    return (
        <>
        <Navbar/>
        <Review/>
        <PostListContainer/>
        <PaginationContainer/>
        <Footer/>
        </>
    )
};

export default PostListPage;