import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const {name, price,seller, stock, img}=props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>

                <h4 className="product-name">Product</h4>
                <p>{name}</p>
                <p><small>By: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} left in stock -order-soon</small></p>
                <button 
                onClick={()=>props.handleAddToCart(props.product)}
                className="btn-regular">{cartIcon} add to cart</button>
            </div>
            

        </div>
    );
};

export default Product;