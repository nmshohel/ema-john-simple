import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart}=props;
    let total=0;
    let totalQuantity=0;
    for(const product of cart)
    {
        if(!product.quantity){
            product.quantity=1;
        }
        total=total+product.price*product.quantity;
        totalQuantity=totalQuantity+product.quantity;
    }

    return (
        <div>
            <h2>Orders Summery</h2>
            <p>Item Ordered: {totalQuantity}</p>
            <p>{props.cart.length}</p>
            <p>Total: {total}</p>
    
            
        </div>
    );
};

export default Cart;