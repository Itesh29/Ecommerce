import React from 'react'
import './Product.css';


const Product = () => {
    return(
        <div> 
            <div className='product'>
                <div className='product-info'>
                    <p> SAMSUNG 28 L Convection & Grill Microwave Oven  (MC28A5013AK, Black) </p>
                    <p className='product-price'>
                        <small> $ </small>
                        <strong> 30 </strong>
                    </p>
                    <div className='product-rating'>⭐</div>
                </div>
                <img src='https://rukminim1.flixcart.com/image/832/832/l23mhzk0/microwave-new/2/x/h/ms23a301tak-samsung-23-original-imagdgmpy6pgsp6d.jpeg?q=70' className='product-img' alt='#'></img>
                <button> Add to Cart</button>
            </div>
        </div>

    )
}

export default Product;