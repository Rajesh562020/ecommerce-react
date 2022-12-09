import './Cart.css';
import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx';
import ProductCardHorizontal from '../../components/ProductCard/ProductCardHorizontal';
import { useCart } from '../../context/cart-context';
const Cart = () => {

    const {cart} = useCart();
    return (
        <>
            <Navbar/>
            <main className='main'>
            {
            cart && cart.length > 0 ? <h1>Your Cart ({cart.length}) Items</h1> : <h2>Your Cart is empty!</h2>
            
            }
            <div className='main-cart d-flex direction-column gap'>
                {
                    cart && cart.length > 0 ? cart.map(product => 
                        <ProductCardHorizontal key={product.id} product={product} />) : ""
                }
                
            </div>
            </main>
        </>
    )
}

export default Cart;