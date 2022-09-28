import React from "react";
import ProductListContainer from "../../containers/productlist/ProductListContainer";
import Navbar from '../Navbar'
import { useState } from 'react';

const ProductList = () => {
  const [query, setQuery] = useState("");
  const onChange = (e) => {
    setQuery(e.target.value.toLowerCase())
}

  return (
    <div>
    <Navbar onChange={onChange}/>
    <ProductListContainer query={query} />
    </div>
);
};


export default ProductList;

