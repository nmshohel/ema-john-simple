import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb,getStoredCart} from '../../utilities/fakedb';
import './Shop.css';
const Shop = () => {
    
    const [products, setProducts]=useState([])

    const [cart, setCart]=useState([])
    useEffect(()=>{
        // fetch('../../../public/products.JSON')
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{

        if(products.length)
        {
            const SaveCart=getStoredCart();
            const storedCart=[];
            for (const key in SaveCart)
            {
                const addedProduct=products.find(product=>product.key===key)
                if(addedProduct)
                {
                    const quantity=SaveCart[key]
                    addedProduct.quantity=quantity;
                    storedCart.push(addedProduct);
                }

                
            }
            setCart(storedCart);
    
        }


    },[products])

    const handleAddToCart=product=>{
        const newCart = [...cart, product];
        setCart(newCart);

        // send to localStorage 
        addToDb(product.key)
        
    }
    return (
        <div >
           <div className="shop-container">
               <div className="product-container">
                   {
                       products.map(product=><Product 
                       key={product.key}
                       product={product}
                       handleAddToCart={handleAddToCart}
                       ></Product>)
                   }
               </div>
               <div className="cart-container">
                   <Cart cart={cart}></Cart>
               </div>
           </div>
        </div>
    );
};

export default Shop;