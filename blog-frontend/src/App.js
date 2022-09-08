import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import ProductPage from './pages/ProductPage';
import ShopList from './pages/ShopListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WriteProductPage from './pages/WriteProductPage';
import Payment from './payment/index';
import HistoryPage from './history/history';


function App() {
  return (
    <div>  
    <Routes>
      <Route path='/payment' element={<Payment/>} />
      <Route path='/form' element={<WriteProductPage/>} />
      <Route path='/' element={<ProductPage/>} />
      <Route path='/post' element={<PostListPage/>} />
      <Route path='/shop' element={<ShopList/>} />
      <Route path="/@productdetail/:id" element={<ProductDetailPage/>}/>
      <Route path='/@:username' element={<PostListPage/>} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/write" element={<WritePage/>} />
      <Route path="/@:username/:postId" element={<PostPage/>} />
      <Route path="/history" element={<HistoryPage/>} />
    </Routes>
    </div>
  );
}

export default App;
