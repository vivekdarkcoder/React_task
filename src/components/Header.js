import React from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaShoppingCart, FiLogIn } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import {getFeatured } from '../redux/action/product'


const Header = ({handleFeatures, handleAllproducts}) => {

 
  const {cartItems} = useSelector((state) => state.cart);
  return (
    <nav>
      <div>
        <button onClick={handleAllproducts}>All Products</button>
        <button onClick={handleFeatures}>Featured Products</button>
      </div>
      <div>
        <Link to="/"><FaShoppingCart /><span>{cartItems}</span></Link>
      </div>
    </nav>
  )
}

export default Header