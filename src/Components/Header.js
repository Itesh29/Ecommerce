import React from 'react'
import './Header.css'
import {  BiSearch } from "react-icons/bi";
import { MdBusinessCenter,MdOutlineShoppingBasket } from "react-icons/md";

const Header = () => {
    return(
        <div>
            <div className='header'>
            <div className='header-logo'>
                <MdBusinessCenter className='title-logo'/>
                <h2 className='title'> eShop </h2>
            </div>
            <div className='header-search'>
                <input className='search' type='text'></input>
                <BiSearch className='search-logo'/>
            </div>
            <div className='header-nav'>
                <div className='nav-item'>
                    <span className='line-one'> Hello USer </span>
                    <span className='line-two'> Sign-Up</span>
                </div>
                <div className='nav-item'>
                    <span className='line-one'> Your </span>
                    <span className='line-two'> Shop </span>
                </div>
                <div className='nav-itembasket'>
                    <MdOutlineShoppingBasket className='cart-logo'/>
                    <span className='line-two'> 0 </span>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header;