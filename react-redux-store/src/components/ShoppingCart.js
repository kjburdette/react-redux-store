import React from 'react'
import { useSelector } from "react-redux";

export default function ShoppingCart() {
    const cart = useSelector(state => state.cart)

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.map((product) => {
                return(
                    <div>
                        <img src={product.image} alt="" height="100" width="100"/>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <button>Remove from Cart</button>
                    </div>
                )
            } )}
            <button>Checkout</button>
        </div>
    )
}
